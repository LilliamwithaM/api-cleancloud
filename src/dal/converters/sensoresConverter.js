const Sensores = require('../pojos/sensoresEntity');
const SensoresDTO = require('../dtos/sensoresDTO');

const toEntity = (sensoresDTO) => {
  const SensoresEntity = new Sensores(
    sensoresDTO.idSensor,
    sensoresDTO.numSerie,
    sensoresDTO.estado,
  );
  return SensoresEntity;
};

const toDto = (sensoresEntity) => {
  const sensoresDTO = new SensoresDTO(
    sensoresEntity.idSensor,
    sensoresEntity.numSerie,
    sensoresEntity.estado,
  );
  return sensoresDTO;
};
module.exports = { toEntity, toDto };
