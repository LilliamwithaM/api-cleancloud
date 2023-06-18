module.exports = class LecturaEntity {
  idLectura;

  calculo;

  pm25;

  pm10;

  ozonoTros;

  dioxidoNitro;

  dioxidoAzufre;

  fecha;

  idSensor;

  idLocalizacion;

  constructor(
    idLectura,
    calculo,
    pm25,
    pm10,
    ozonoTros,
    dioxidoNitro,
    dioxidoAzufre,
    fecha,
    idSensor,
    idLocalizacion,
  ) {
    this.idLectura = idLectura;
    this.calculo = calculo;
    this.pm25 = pm25;
    this.pm10 = pm10;
    this.ozono_tros = ozonoTros;
    this.dioxido_nitro = dioxidoNitro;
    this.dioxido_azufre = dioxidoAzufre;
    this.fecha = fecha;
    this.idSensor = idSensor; // LLave foranea de tabla Sensor
    this.idLocalizacion = idLocalizacion; // LLave foranea de tabla Localizacion
  }
};
