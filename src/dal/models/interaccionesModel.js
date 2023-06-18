const { toEntity, toDto } = require('../converters/interaccionesConverter');
const { store, search } = require('../daos/interaccionesDao');

const add = async (interaccionObject) => {
  const interaccionEntity = toEntity(interaccionObject);

  await store(interaccionEntity);
};

const findOne = async (object) => {
  const objectKey = Object.keys(object)[0];
  const objectValue = object[objectKey];
  const searchResult = await search(objectKey, objectValue);
  if (searchResult !== undefined) {
    const localizacionDto = toDto(searchResult);
    return localizacionDto;
  }
  return searchResult;
};

// const findByDate = async ()
module.exports = { add, findOne };
