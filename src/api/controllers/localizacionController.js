const { matchedData } = require('express-validator');
const localizacionService = require('../bll/businessServices/localizacionService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createLocalizacion = async (req, res) => {
  try {
    const localizacionData = matchedData(req);
    await localizacionService.newLocalizacion(localizacionData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await localizacionService.
//     } catch (err) {

//     }
// }

module.exports = { createLocalizacion };
