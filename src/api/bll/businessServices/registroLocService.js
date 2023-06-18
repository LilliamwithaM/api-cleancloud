const registroLocModel = require('../../../dal/models/registroLocModel');

const newRegistroLoc = (registroLocData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await registroLocModel.add(registroLocData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newRegistroLoc };
