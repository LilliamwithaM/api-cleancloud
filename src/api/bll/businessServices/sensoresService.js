const sensoresModel = require('../../../dal/models/sensoresModel');

const newSensor = (sensorData) => new Promise((resolve, reject) => {
  (async () => {
    try {
      await sensoresModel.add(sensorData);
      resolve();
    } catch (err) {
      const error = [err];
      reject(error);
    }
  })();
});

module.exports = { newSensor };
