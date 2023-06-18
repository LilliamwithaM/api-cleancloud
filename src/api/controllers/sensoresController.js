const { matchedData } = require('express-validator');
const sensoresService = require('../bll/businessServices/sensoresService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createSensor = async (req, res) => {
  try {
    const sensorData = matchedData(req);
    await sensoresService.newSensor(sensorData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await sensoresService.
//     } catch (err) {

//     }
// }

module.exports = { createSensor };
