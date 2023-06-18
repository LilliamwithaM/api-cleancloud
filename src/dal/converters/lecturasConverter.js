const Lecturas = require('../pojos/lecturasEntity');
const LecturasDTO = require('../dtos/lecturasDTO');

const toEntity = (lecturasDTO) => {
  const LecturasEntity = new Lecturas(
    lecturasDTO.idLectura,
    lecturasDTO.calculo,
    lecturasDTO.pm25,
    lecturasDTO.pm10,
    lecturasDTO.ozonoTros,
    lecturasDTO.dioxidoNitro,
    lecturasDTO.dioxidoAzufre,
    lecturasDTO.fecha,
    lecturasDTO.idSensor,
    lecturasDTO.idLocalizacion,
  );
  return LecturasEntity;
};

const toDto = (lecturaEntity) => {
  const lecturasDTO = new LecturasDTO(
    lecturaEntity.idLectura,
    lecturaEntity.calculo,
    lecturaEntity.pm25,
    lecturaEntity.pm10,
    lecturaEntity.ozonoTros,
    lecturaEntity.dioxidoNitro,
    lecturaEntity.dioxidoAzufre,
    lecturaEntity.fecha,
    lecturaEntity.idSensor,
    lecturaEntity.idLocalizacion,
  );
  return lecturasDTO;
};

module.exports = { toEntity, toDto };
