const data = require('../data/zoo_data');

const { species, hours } = data;
const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animalsList = species.map(({ name }) => name);
const zooDaysHours = Object.entries(hours);

function generateSchedule() {
  const zooSchedule = {};
  zooDaysHours.forEach(([day, time]) => {
    const { open, close } = time;
    let officeHour = '';
    const filterByDay = species.filter(({ availability }) => availability.includes(day))
      .map((specie) => specie.name);
    const isOpen = `Open from ${open}am until ${close}pm`;
    if (open !== 0) {
      officeHour = isOpen;
    } else {
      officeHour = 'CLOSED';
    }
    const exhibition = open !== 0 ? filterByDay : 'The zoo will be closed!';
    zooSchedule[day] = { officeHour, exhibition };
  });
  return zooSchedule;
}

function getSchedule(scheduleTarget) {
  if (daysWeek.includes(scheduleTarget)) {
    const schedule = generateSchedule();
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  const animalAvailability = (animal) => species.find(({ name }) => name === animal).availability;
  if (animalsList.includes(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }
  return generateSchedule();
}

module.exports = getSchedule;
