let Book = {
  Auttor: "Jhon smith",
  price: "127$",
  date: "12-13-1998",
};
let Copy_Book = Book; //copind directly
let Clone_BOOK = structuredClone(Book); //clone
let Asssigning = Object.assign({}, Book); //also clone
Copy_Book.Auttor = "Alemayehu wase"; //global
console.log(Book.Auttor); //
console.log(Clone_BOOK.Auttor); //jhon smith
console.log(Asssigning.Auttor); //also Jhon smith
delete Book.price;
console.log(Copy_Book);
