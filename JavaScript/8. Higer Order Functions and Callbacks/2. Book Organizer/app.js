const books = [
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018
  },
  {
    title: "Rich Dad Poor Dad",
    authorName: "Robert Kiyosaki",
    releaseYear: 1997
  },
  {
    title: "Zero to Sold",
    authorName: "Arvid Kahl",
    releaseYear: 2020
  },
  {
    title: "The Old Man and the Sea",
    authorName: "Ernest Hemingway",
    releaseYear: 1952
  },
  {
    title: "Nineteen Eighty-Four",
    authorName: "George Orwell",
    releaseYear: 1949
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }
  else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
  else if (book1.releaseYear === book2.releaseYear) {
    return 0;
  }
}

books.sort(sortByYear);

const filteredBooks = books.filter((arr) => {
  return arr.releaseYear <= 1950;
});

console.log(filteredBooks);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);