//TODO add imports if needed
//TODO doc
/**
 * The main function which calls the application.
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */

//lists of male names & surnames
const maleNames = [
  'Ján',
  'Andrej',
  'Peter',
  'František',
  'Martin',
  'Lukáš',
  'Patrik',
  'Jozef',
  'Michal',
  'Samuel',
];

const maleSurnames = [
  'Novák',
  'Kováč',
  'Horváth',
  'Novotný',
  'Ševčík',
  'Benko',
  'Hriň',
  'Ďurica',
  'Vavrek',
  'Kmeť',
];

// lists of female names & surnames
const femaleNames = [
  'Anna',
  'Mária',
  'Jana',
  'Petra',
  'Tamara',
  'Andrea',
  'Monika',
  'Katarína',
  'Nina',
  'Alena',
];
const femaleSurnames = [
  'Holubová',
  'Zubáčová',
  'Tóthová',
  'Repková',
  'Šoltýsová',
  'Bartošová',
  'Špirková',
  'Gajdošová',
  'Muráriková',
  'Kocúriková',
];

const workLoad = [10, 20, 30, 40];
const listOfGenders = ['male', 'female'];

function getRandomFromList(list) {
  let randomSelection = Math.floor(Math.random() * list.length);
  let randomResult = list[randomSelection];
  return randomResult;
}

function getRandomAge(ageRange) {
  const msInYear = 365.25 * 24 * 60 * 60 * 1000;

  const age = ageRange.min + Math.random() * (ageRange.max - ageRange.min);

  const ageMs = age * msInYear;

  const birthdate = new Date(Date.now() - ageMs);

  return birthdate.toISOString();
}

function generateRandomEmployees(count) {
  let listOfEmployees = [];

  for (let i = 0; i < count; i++) {
    let employee = {};

    employee.gender = getRandomFromList(listOfGenders);

    const names = employee.gender === 'male' ? maleNames : femaleNames;
    const surnames = employee.gender === 'male' ? maleSurnames : femaleSurnames;

    employee.birthdate = getRandomAge(dtoIn.age);
    employee.name = getRandomFromList(names);
    employee.surname = getRandomFromList(surnames);
    employee.workload = getRandomFromList(workLoad);
    employee.workload = getRandomFromList(workLoad);
    listOfEmployees.push(employee);
  }
  return listOfEmployees;
}

export function main(dtoIn) {
  //TODO code
  let dtoOut = generateRandomEmployees(dtoIn.count);
  return dtoOut;
}
