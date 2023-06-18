module.exports = class LocalizacionDTO {
  idLocalizacion;

  latitud;

  longitud;

  descripcion;

  constructor(
    idLocalizacion,
    latitud,
    longitud,
    descripcion,
  ) {
    this.idLocalizacion = idLocalizacion;
    this.latitud = latitud;
    this.longitud = longitud;
    this.descripcion = descripcion;
  }
};
