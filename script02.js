

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log('liste des titres');
let nameList = [];
let bookList = books.map(book => nameList.push(book.title));
console.log(nameList);

console.log('y a t il des livres jamais empruntés ?');
let neverRented = false;
let bookRent = books.map(function (book){
  if (book.rented === 0) {
    neverRented = true
  }
});
console.log(neverRented);

console.log("classement des livres selon leur taux d'emprunt");
books.sort((a, b) => a.rented - b.rented);
console.log(books);

console.log('supprimer le livre dont la ref est 133712');
indexNb = books.findIndex(book => book.id === 133712);
books.splice(indexNb, 1);
console.log(books);
