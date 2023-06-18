const { getConnection } = require('../config/postgres');

const store = async (localizacionEntity) => {
  const con = await getConnection();

  const { latitud } = localizacionEntity;
  const { longitud } = localizacionEntity;
  const { descripcion } = localizacionEntity;

  await con.query(
    'INSERT INTO localizacion (latitud, longitud, descripcion) VALUES ($1, $2, $3);',
    [latitud, longitud, descripcion],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM localizacion WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
