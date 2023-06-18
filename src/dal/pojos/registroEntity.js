module.exports = class RegistroEntity {
  idRegistro;

  edad;

  sexo;

  enfermedadRespiratoria;

  constructor(
    idRegistro,
    edad,
    sexo,
    enfermedadRespiratoria,
  ) {
    this.idRegistro = idRegistro;
    this.edad = edad;
    this.sexo = sexo;
    this.enfermedadRespiratoria = enfermedadRespiratoria;
  }
};
