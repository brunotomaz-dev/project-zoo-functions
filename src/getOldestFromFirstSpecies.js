const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  const idSpecie = findEmployee.responsibleFor[0];
  const specieAnimals = species.find((animal) => animal.id === idSpecie).residents;
  const findOlder = specieAnimals.map(({ age }) => age).sort((a, b) => b - a);
  const speciesOlder = specieAnimals.find((animal) => animal.age === findOlder[0]);
  return [speciesOlder.name, speciesOlder.sex, speciesOlder.age];
}

module.exports = getOldestFromFirstSpecies;
