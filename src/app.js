require('dotenv').config();
const express = require('express');
const cors = require('cors');

const interaccionRoute = require('./api/routes/interaccionRoute');
const lecturaRoute = require('./api/routes/lecturaRoute');
const localizacionRoute = require('./api/routes/localizacionRoute');
const registroLocRoute = require('./api/routes/registroLocRoute');
const registroRoute = require('./api/routes/registroRoute');
const sensorRoute = require('./api/routes/sensorRoute');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * se usa el puerto definido en .env (default 3000)
 */
const port = process.env.PORT || 3000;

/**
 * usamos ./routes/index.js para manejar endpoints
 */
app.use('/api/interaccion', interaccionRoute);
app.use('/api/lectura', lecturaRoute);
app.use('/api/localizacion', localizacionRoute);
app.use('/api/registro_loc', registroLocRoute);
app.use('/api/registro', registroRoute);
app.use('/api/sensor', sensorRoute);

app.listen(port, () => {
  console.log(`Corriendo servidor en puerto: ${port}`);
});
