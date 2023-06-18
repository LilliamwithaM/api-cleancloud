const Localizacion = require('../pojos/localizacionEntity');
const LocalizacionDTO = require('../dtos/localizacionDTO');

const toEntity = (localizacionDTO) => {
  const LocalizacionEntity = new Localizacion(
    localizacionDTO.idLocalizacion,
    localizacionDTO.latitud,
    localizacionDTO.longitud,
    localizacionDTO.descripcion,
  );
  return LocalizacionEntity;
};

const toDto = (localizacionEntity) => {
  const localizacionDTO = new LocalizacionDTO(
    localizacionEntity.idLocalizacion,
    localizacionEntity.latitud,
    localizacionEntity.longitud,
    localizacionEntity.descripcion,
  );
  return localizacionDTO;
};
module.exports = { toEntity, toDto };
