module.exports = class SensorEntity {
  idSensor;

  numSerie;

  estado;

  constructor(
    idSensor,
    numSerie,
    estado,
  ) {
    this.idSensor = idSensor;
    this.numSerie = numSerie;
    this.estado = estado;
  }
};
