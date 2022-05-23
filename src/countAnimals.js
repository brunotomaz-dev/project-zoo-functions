const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;

  if (animal === undefined) {
    const animals = {};
    species.forEach((animalSpecie) => {
      animals[animalSpecie.name] = animalSpecie.residents.length;
    });
    return animals;
  }

  const { specie } = animal;

  if (animal.sex === undefined) {
    return species.find(({ name }) => name === specie).residents.length;
  }
  const { sex: animalSex } = animal;
  return species.find(({ name }) => name === specie)
    .residents.filter(({ sex }) => sex === animalSex).length;
}

module.exports = countAnimals;
