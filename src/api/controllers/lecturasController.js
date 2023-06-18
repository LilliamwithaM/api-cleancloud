const { matchedData } = require('express-validator');
const lecturasService = require('../bll/businessServices/lecturasService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createLectura = async (req, res) => {
  try {
    const lecturaData = matchedData(req);
    await lecturasService.newLectura(lecturaData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await lecturasService.
//     } catch (err) {

//     }
// }

module.exports = { createLectura };
