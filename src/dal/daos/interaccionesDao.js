const { getConnection } = require('../config/postgres');

const store = async (interaccionEntity) => {
  const con = await getConnection();

  const { estado } = interaccionEntity;

  await con.query(
    'INSERT INTO interacciones (estado) VALUES ($1);',
    [estado],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM interacciones WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
