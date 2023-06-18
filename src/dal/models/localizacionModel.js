const { toEntity, toDto } = require('../converters/localizacionConverter');
const { store, search } = require('../daos/localizacionDao');

const add = async (localizacionObject) => {
  const localizacionEntity = toEntity(localizacionObject);

  await store(localizacionEntity);
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
