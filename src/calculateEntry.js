const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  if (entrants === undefined) {
    return undefined;
  }
  const children = entrants.filter(({ age }) => age < 18).length;
  const adults = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniors = entrants.filter(({ age }) => age >= 50).length;
  return { child: children, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length < 1) {
    return 0;
  }
  const calculateEntrants = countEntrants(entrants);
  const key = Object.keys(calculateEntrants);
  return key.map((objectKey) => calculateEntrants[objectKey] * prices[objectKey])
    .reduce((acc, curr) => acc + curr);
}

module.exports = { calculateEntry, countEntrants };
