const Interaccion = require('../pojos/interaccionesEntity');
const InteraccionDTO = require('../dtos/interaccionesDTO');

const toEntity = (interaccionDTO) => {
  const InteraccionEntity = new Interaccion(
    interaccionDTO.idInteraccion,
    interaccionDTO.status,
  );
  return InteraccionEntity;
};

const toDto = (interaccionEntity) => {
  const interaccionDto = new InteraccionDTO(
    interaccionEntity.idInteraccion,
    interaccionEntity.status,
  );
  return interaccionDto;
};
module.exports = { toEntity, toDto };
