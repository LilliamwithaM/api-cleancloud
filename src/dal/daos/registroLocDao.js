const { getConnection } = require('../config/postgres');

const store = async (registroLocEntity) => {
  const con = await getConnection();

  const { observacion } = registroLocEntity;
  const { idRegistro } = registroLocEntity;
  const { idLocalizacion } = registroLocEntity;

  await con.query(
    'INSERT INTO registro_loc (observacion, idRegistro, idLocalizacion) VALUES ($1, $2, $3);',
    [observacion, idRegistro, idLocalizacion],
  );
};

const search = async (keyToSearch, valueToSearch) => {
  const con = await getConnection();
  const query = `SELECT * FROM registro_loc WHERE ${keyToSearch} = ?;`;
  const searchResult = await con.query(query, [valueToSearch]);
  return searchResult[0];
};

module.exports = { store, search };
