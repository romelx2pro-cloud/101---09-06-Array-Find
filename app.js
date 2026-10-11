// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds"
// ]

// // Find first movie that includes 'Mrs' in its title:
// const movie = movies.find(movie => {
//   return movie.includes('Mrs');
// })

// //Find first movie that begins with 'Mrs':
// const movie2 = movies.find(m => m.indexOf("Mrs") === 0);

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36
//   }
// ]
// //Find first book w/ rating over 4.3
// const goodBook = books.find(b => b.rating >= 4.3);

// //Find first book with Neil Gaiman as an author:
// const neilBook = books.find(b => (
//   b.authors.includes('Neil Gaiman')
// ))

let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];
let f = movies.find((m) => m.includes("Mr"));
let f2 = movies.find((m) => m.lastIndexOf("Mr") === 0);
// console.log(f2);
// const array = [5, 15, 8, 130, 44];

// let f = array.find((n) => n > 10);
// console.log(f);

// const found = array.find((element) => element > 10);

// console.log(found);
// // Expected output: 12
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];
const grb = books.find((r) => r.rating >= 4.3);
const n = books.find((r) => r.authors === "Neil Gaiman");
console.log(grb);
