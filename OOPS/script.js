class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }
    listAllBook() {
        this.books.forEach(function (book) {
            console.log(`${book.name}`);
        })
    }

}

class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStatus = false;

    }
    info(){
        console.log(`${this.name}is written by ${this.author}  you have ${this.readStatus ? "read it" : "not read this book"} and this available at amazone at ${this.price} price `)
    }
    changeReadStatus(){
        this.readStatus = !this.readStatus;
    }
}

let jhanshiLibrary = new Library()
let book1 = new Book(" wealth is life ", "323kklk", 1200, 'abra ka dabra')
let book2 = new Book(" Harry potter ", "gojo", 500, 'sakuna kaisen')
let book3 = new Book(" jujutsu kaisen ", "inosuke", 1200, 'demon slayer')

 jhanshiLibrary.addBook(book1)
 jhanshiLibrary.addBook(book2)
 jhanshiLibrary.addBook(book3)