const express = require("express");
const booksRouter = express.Router();
const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    id: 4,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
  },
  {
    id: 8,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    year: 1866,
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
  },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
  },
];

booksRouter.use(express.urlencoded({ extended: true })); //allows us to use parsing the JSON automatically for post from Forms

//add nw book
booksRouter.post("/", (req, res) => {
  const { author, title, year } = req.body;
  let newId = Math.max(...books.map((books) => books.id, 0)) + 1;
  const newBOOK = {
    author,
    title,
    year,
    id: newId,
  };
  books.push(newBOOK);
  res.json({ message: "New Book aded with id:" + newId, book: newBOOK });
});
//Delete fature
booksRouter.post("/delete", (req, res) => {
  const { bookId } = req.body;
  const booktodelete = books.findIndex(({ id }) => id === Number(bookId));
  if (booktodelete === -1) {
    return res.status(404).send("THERE IS NO BOOK with the id " + bookId);
  }
  //if wwe find that book now let us delete it using its index
  books.splice(booktodelete, 1);
  res.json({ message: "Books are now " + books.length });
});

//seach Book new ID
booksRouter.get("/search", (req, res) => {
  const { query } = req.query;
  const actual=req.body

  console.log(query);
  //now let us find that book inside the the Array of Books
  const bookfounded = books.find(({ id }) => id === Number(query));
  if (!bookfounded) {
    return res.status(404).send("THERE IS NO BOOK with the id " + query);
  }
  res.json({
    message: "Book founded se detailse below",
    bookDetaul: bookfounded,
  });
});

module.exports = booksRouter;

//Req get Query not body
//Req post Body not query
