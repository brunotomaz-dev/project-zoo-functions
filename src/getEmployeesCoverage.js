const data = require('../data/zoo_data');

const { employees } = data;

function getAnimals(animalsId) {
  const { species } = data;
  return animalsId.map((animal) => species.find(({ id }) => animal === id));
}

function getAllEmployee() {
  const allEmployeesCoverage = employees.map((item) => {
    const { id, firstName, lastName, responsibleFor } = item;
    const species = getAnimals(responsibleFor).map(({ name }) => name);
    const locations = getAnimals(responsibleFor).map(({ location }) => location);
    const fullName = `${firstName} ${lastName}`;
    return { id, fullName, species, locations };
  });
  return allEmployeesCoverage;
}

function getOneEmployee(employeeName) {
  const key = Object.keys(employeeName);
  const searchEmployee = employees
    .find(({ firstName, lastName, id }) => firstName === employeeName[key]
    || lastName === employeeName[key]
    || id === employeeName[key]);
  try {
    const { id, firstName, lastName, responsibleFor } = searchEmployee;
    const species = getAnimals(responsibleFor).map(({ name }) => name);
    const locations = getAnimals(responsibleFor).map(({ location }) => location);
    const fullName = `${firstName} ${lastName}`;
    return { id, fullName, species, locations };
  } catch (err) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(employee) {
  if (employee !== undefined) {
    return getOneEmployee(employee);
  }
  if (employee === undefined) {
    return getAllEmployee();
  }
}

module.exports = getEmployeesCoverage;
