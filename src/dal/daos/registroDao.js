const { getConnection } = require('../config/postgres');

const store = async (registroEntity) => {
  const con = await getConnection();

  const { edad } = registroEntity;
  const { sexo } = registroEntity;
  const { enfermedadRespiratoria } = registroEntity;

  await con.query(
    'INSERT INTO registro (edad, sexo, enfermedadRespiratoria) VALUES ($1, $2, $3);',
    [edad, sexo, enfermedadRespiratoria],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM registro WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
