const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find(({ name }) => name === animal)
    .residents.every(({ age: animalAge }) => animalAge >= age);
}

module.exports = getAnimalsOlderThan;
