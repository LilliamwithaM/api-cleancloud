const { toEntity, toDto } = require('../converters/sensoresConverter');
const { store, search } = require('../daos/sensoresDao');

const add = async (sensorObject) => {
  const sensorEntity = toEntity(sensorObject);

  await store(sensorEntity);
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
