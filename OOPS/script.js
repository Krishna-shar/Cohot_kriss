// class Library {
//     constructor() {
//         this.books = [];
//     }

//     addBooks(books) {
//         this.books.push(...books)
//     }
//     listAllBooks() {
//         this.books.forEach(function (book) {
//             console.log(`${book.name}`);
//         })
//     }

// }

// class Book{
//     constructor(name,isbn,price,author){
//         this.name = name;
//         this.isbn = isbn;
//         this.price = price;
//         this.author = author;
//         this.readStatus = false;

//     }
//     info(){
//         console.log(`${this.name}is written by ${this.author}  you have ${this.readStatus ? "read it" : "not read this book"} and this available at amazone at ${this.price} price `)
//     }
//     changeReadStatus(){
//         this.readStatus = !this.readStatus;
//     }
// }

// let jhanshiLibrary = new Library()
// let book1 = new Book(" wealth is life ", "323kklk", 1200, 'abra ka dabra')
// let book2 = new Book(" Harry potter ", "gojo", 500, 'sakuna kaisen')
// let book3 = new Book(" jujutsu kaisen ", "inosuke", 1200, 'demon slayer')

//  jhanshiLibrary.addBooks([book1,book2,book3])


// class MobileShop {
//     constructor() {
//         this.mobiles = [];
//     }

//     addMobile(mobile) {
//         this.mobiles.push(mobile);
//     }

//     listAllMobiles() {
//         this.mobiles.forEach(function (mb, index) {
//             console.log(
//                 `${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`
//             );
//         });
//     }
// }

// class Mobile {
//     constructor(brand, model, price, color) {
//         this.id = Math.floor(Math.random() * 100000);
//         this.model = model;
//         this.color = color;
//         this.brand = brand;
//         this.price = price;
//         this.sims = [];
//     }
//     getMobileInfo() {
//         console.log(
//             `${this.brand} - ${this.model} = ${this.price} - ${this.color}`
//         );
//     }
//     insertSim(sim) {
//         if (this.sims.length === 2) {
//             console.log("sorry you already have 2 sims installed.");
//             return;
//         }
//         this.sims.push(sim);
//     }
// }

// class Sim {
//     constructor(brand, balance) {
//         this.brand = brand;
//         this.balance = balance;
//     }
//     addBalance(balance) {
//         if (balance < 0) {
//             console.log("to add balance give amount greater than 0");
//             return;
//         }
//         this.balance += balance;
//     }
// }

// let myMobileShop = new MobileShop();
// let samsung = new Mobile("Samsung", "Galaxy s23 ultra", 120000, "black");
// let tatadocomo = new Sim("tata docomo", 300);

// samsung.insertSim(tatadocomo);
// myMobileShop.addMobile(samsung);





const prompt = require("prompt-sync")(); // install with: npm install prompt-sync

class MobileShop {
    constructor() {
        this.mobiles = [];
    }

    addMobile(mobile) {
        this.mobiles.push(mobile);
    }

    listAllMobiles() {
        this.mobiles.forEach(function (mb, index) {
            console.log(
                `${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`
            );
        });
    }
}

class Mobile {
    constructor(brand, model, price, color) {
        this.id = Math.floor(Math.random() * 100000);
        this.model = model;
        this.color = color;
        this.brand = brand;
        this.price = price;
        this.sims = [];
    }
    getMobileInfo() {
        console.log(
            `${this.brand} - ${this.model} = ${this.price} - ${this.color}`
        );
    }
    insertSim(sim) {
        if (this.sims.length === 2) {
            console.log("sorry you already have 2 sims installed.");
            return;
        }
        this.sims.push(sim);
    }
}

class Sim {
    constructor(brand, balance) {
        this.brand = brand;
        this.balance = balance;
    }
    addBalance(balance) {
        if (balance < 0) {
            console.log("to add balance give amount greater than 0");
            return;
        }
        this.balance += balance;
    }
}

// ✅ Mobile shop object
let myMobileShop = new MobileShop();

// ✅ User input for Mobile
let brand = prompt("Enter mobile brand: ");
let model = prompt("Enter mobile model: ");
let price = Number(prompt("Enter mobile price: "));
let color = prompt("Enter mobile color: ");

let userMobile = new Mobile(brand, model, price, color);

// ✅ User input for Sim
let simBrand = prompt("Enter SIM brand: ");
let simBalance = Number(prompt("Enter SIM balance: "));

let userSim = new Sim(simBrand, simBalance);

// Insert SIM inside Mobile
userMobile.insertSim(userSim);

// Add mobile to shop
myMobileShop.addMobile(userMobile);

// ✅ Display all mobiles
console.log("\nAll Mobiles in Shop:");
myMobileShop.listAllMobiles();
