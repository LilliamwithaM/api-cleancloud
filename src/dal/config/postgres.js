const { Pool } = require('pg');
require('dotenv').config();

const connectionData = {

  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

};

const connection = new Pool(connectionData);

const getConnection = () => connection;

module.exports = { getConnection };
