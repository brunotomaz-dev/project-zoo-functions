const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const searchFirstName = employees.find(({ firstName }) => firstName === employeeName);
  const searchLastName = employees.find(({ lastName }) => lastName === employeeName);
  if (searchFirstName !== undefined) {
    return searchFirstName;
  }
  if (searchLastName !== undefined) {
    return searchLastName;
  }
  return {};
}

module.exports = getEmployeeByName;
