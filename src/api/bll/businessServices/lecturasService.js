const lecturasModel = require('../../../dal/models/lecturasModel');

const newLectura = (lecturaData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await lecturasModel.add(lecturaData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newLectura };
