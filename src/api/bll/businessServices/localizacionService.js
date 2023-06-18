const localizacionModel = require('../../../dal/models/localizacionModel');

const newLocalizacion = (localizacionData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await localizacionModel.add(localizacionData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newLocalizacion };
