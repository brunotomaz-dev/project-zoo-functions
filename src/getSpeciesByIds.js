const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const find = [];
  ids.forEach((animal) => {
    find.push(species.find(({ id }) => id === animal));
  });
  return find;
}

module.exports = getSpeciesByIds;
