const { matchedData } = require('express-validator');
const registroLocService = require('../bll/businessServices/registroLocService');
const { httpErrorHandler } = require('../handlers/errorHandler');

const createRegistroLoc = async (req, res) => {
  try {
    const registroLocData = matchedData(req);
    await registroLocService.newRegistroLoc(registroLocData);

    res.send({ success: true });
  } catch (err) {
    httpErrorHandler(res, err);
  }
};

// const readRegistry = async (req, res) => {
//     try {
//         const registryId = req.registry.id;
//         const data = await registroLocService.
//     } catch (err) {

//     }
// }

module.exports = { createRegistroLoc };
