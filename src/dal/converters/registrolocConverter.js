const RegistroLoc = require('../pojos/registrolocEntity');
const RegistroLocDTO = require('../dtos/registrolocDTO');

const toEntity = (registrolocDTO) => {
  const RegistroLocEntity = new RegistroLoc(
    registrolocDTO.idRegistroLoc,
    registrolocDTO.fecha,
    registrolocDTO.hora,
    registrolocDTO.observacion,
    registrolocDTO.idRegistro,
    registrolocDTO.idLocalizacion,
  );
  return RegistroLocEntity;
};

const toDto = (registrolocEntity) => {
  const registrolocDTO = new RegistroLocDTO(
    registrolocEntity.idRegistroLoc,
    registrolocEntity.fecha,
    registrolocEntity.hora,
    registrolocEntity.observacion,
    registrolocEntity.idRegistro,
    registrolocEntity.idLocalizacion,
  );
  return registrolocDTO;
};
module.exports = { toEntity, toDto };
