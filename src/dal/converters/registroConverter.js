const Registro = require('../pojos/registroEntity');
const RegistroDTO = require('../dtos/registroDTO');

const toEntity = (registroDTO) => {
  const RegistroEntity = new Registro(
    registroDTO.idRegistro,
    registroDTO.edad,
    registroDTO.sexo,
    registroDTO.enfermedadRespiratoria,
  );
  return RegistroEntity;
};

const toDto = (registroEntity) => {
  const registroDTO = new RegistroDTO(
    registroEntity.idRegistro,
    registroEntity.edad,
    registroEntity.sexo,
    registroEntity.enfermedadRespiratoria,
  );
  return registroDTO;
};
module.exports = { toEntity, toDto };
