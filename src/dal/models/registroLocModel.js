const { toEntity, toDto } = require('../converters/registrolocConverter');
const { store, search } = require('../daos/registroLocDao');

const add = async (registroLocObject) => {
  const registroLocEntity = toEntity(registroLocObject);

  await store(registroLocEntity);
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
