const { toEntity, toDto } = require('../converters/lecturasConverter');
const { store, search } = require('../daos/lecturasDao');

const add = async (lecturaObject) => {
  const lecturaEntity = toEntity(lecturaObject);

  await store(lecturaEntity);
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
