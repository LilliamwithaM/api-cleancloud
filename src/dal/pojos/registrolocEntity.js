module.exports = class RegistroLocEntity {
  idRegistroLoc;

  fecha;

  hora;

  observacion;

  idRegistro;

  idLocalizacion;

  constructor(
    idRegistroLoc,
    fecha,
    hora,
    observacion,
    idRegistro,
    idLocalizacion,
  ) {
    this.idRegistroLoc = idRegistroLoc;
    this.fecha = fecha;
    this.hora = hora;
    this.observacion = observacion;
    this.idRegistro = idRegistro;
    this.idLocalizacion = idLocalizacion;
  }
};
