const { getConnection } = require('../config/postgres');

const store = async (lecturaEntity) => {
  const con = await getConnection();

  const { calculo } = lecturaEntity;
  const { pm25 } = lecturaEntity;
  const { pm10 } = lecturaEntity;
  const { ozonoTros } = lecturaEntity;
  const { dioxidoNitro } = lecturaEntity;
  const { dioxidoAzufre } = lecturaEntity;
  const { idSensor } = lecturaEntity;
  const { idLocalizacion } = lecturaEntity;

  await con.query(
    'INSERT INTO lecturas (calculo, pm25, pm10, ozono_tros, dioxido_nitro, dioxido_azufre, id_sensor, id_localizacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);',
    [calculo, pm25, pm10, ozonoTros, dioxidoNitro, dioxidoAzufre, idSensor, idLocalizacion],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM lecturas WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
