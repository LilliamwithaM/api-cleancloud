const registroModel = require('../../../dal/models/registroModel');

const newRegistro = (registroData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await registroModel.add(registroData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newRegistro };
