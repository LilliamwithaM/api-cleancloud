const { matchedData } = require('express-validator');
const interaccionesService = require('../bll/businessServices/interaccionesService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createInteraccion = async (req, res) => {
  try {
    const interaccionData = matchedData(req);
    await interaccionesService.newInteraccion(interaccionData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await interaccionesService.
//     } catch (err) {

//     }
// }

module.exports = { createInteraccion };
