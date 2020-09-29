const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let namesArray = [];
var entr = entrepreneurs.map(function (guys) {
  namesArray.push(guys.first + " " + guys.last);
});
console.log("liste des prénoms et noms des entrepreneurs")
console.log(namesArray);

let newEntrepreneurs = entrepreneurs;
let changeAge = newEntrepreneurs.map(function (e) {
  e.firstName = e.first;
  delete e.first;
  e.lastName = e.last;
  delete e.last;
  e.age = 2020 - e.year;
  delete e.year;
});
console.log("liste modifiée");
console.log(newEntrepreneurs);

let seventiesOnes = [];
let ageFilter = entrepreneurs.filter(guy => guy.age > 40 && guy.age < 50);
console.log(ageFilter);
