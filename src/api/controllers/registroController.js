const { matchedData } = require('express-validator');
const registroService = require('../bll/businessServices/registroService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createRegistro = async (req, res) => {
  try {
    const registroData = matchedData(req);
    await registroService.newRegistro(registroData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await registroService.
//     } catch (err) {

//     }
// }

module.exports = { createRegistro };
