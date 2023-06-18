const { toEntity, toDto } = require('../converters/registroConverter');
const { store, search } = require('../daos/registroDao');

const add = async (registroObject) => {
  const registroEntity = toEntity(registroObject);

  await store(registroEntity);
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
