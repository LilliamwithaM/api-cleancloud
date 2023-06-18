const { getConnection } = require('../config/postgres');

const store = async (sensorEntity) => {
  const con = await getConnection();

  const { numSerie } = sensorEntity;
  const { estado } = sensorEntity;

  await con.query(
    'INSERT INTO sensores (numSerie, estado) VALUES ($1, $2);',
    [numSerie, estado],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM sensores WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
