const interaccionesModel = require('../../../dal/models/interaccionesModel');

const newInteraccion = (interaccionData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await interaccionesModel.add(interaccionData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newInteraccion };
