module.exports = class InteraccionEntity {
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
