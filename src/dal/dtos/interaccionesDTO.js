module.exports = class InteraccionDTO {
  idInteraccion;

  status;

  constructor(
    idInteraccion,
    status,
  ) {
    this.idInteraccion = idInteraccion;
    this.status = status;
  }
};
