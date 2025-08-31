// Strong number: A positive integer where the sum of the factorials of its digits equals the original number.
// Approach: 1. Separate the digits of the number
//           2. Calculate the factorial of each digit and sum them

// let prompt = require("prompt-sync")();                                               // User se input lene ke liye prompt-sync module import kiya (ye sirf Node.js me kaam karta hai)
// let n = Number(prompt("Enter a number to check if it is a Strong Number: "));        // User se number input liya aur usko Number me convert kiya
// let copy = n;                                                                        // Original number ko copy variable me store kiya, taki baad me compare kar sake
// let ans = 0;                                                                         // Yahan pe sum store karenge sabhi digits ke factorial ka

// while (n > 0) {                                                                      // Jab tak number 0 se bada hai, loop chalayenge
//     let dig = n % 10;                                                                // Last digit nikal rahe hain (modulo operator se)
//     let fact = 1;                                                                    // Factorial calculate karne ke liye variable
//     for (let i = 1; i <= dig; i++) {                                                 // 1 se leke digit tak loop chalayenge
//         fact *= i;                                                                   // Factorial calculate kar rahe hain (fact = fact * i)
//     }
//     ans += fact;                                                                     // Jo factorial nikla, usko ans me add kar diya
//     n = Math.floor(n / 10);                                                          // Number ko ek digit kam kar diya (last digit hata di)
// }

// if (copy === ans) {                                                                  // Agar original number aur factorials ka sum barabar hai
//     console.log("Strong Number");                                                    // To strong number hai
// } else {
//     console.log("Not a Strong Number");                                              // Nahi to strong number nahi hai
// }



// let arr = [10,20,30,40,50]
// arr.push(60)
// console.log(arr)
// arr.unshift(70)
// console.log(arr)



// let arr2 = [10,20,30,40,50]
// console.log(arr2[2])


// let prompt = require("prompt-sync")();     
// let Size = Number(prompt("Enter Array Size"))
// let arr = new Array(Size)
// for(let i = 0; i<arr.length; i++){
//     arr[i]=Number(prompt('Enter Element'))

// }
// console.log(arr)



// Sum of Array


// let prompt = require("prompt-sync")();     
// let Size = Number(prompt("Enter Array Size"))
// let arr = new Array(Size)
// let sum = 0
// for(let i = 0; i<arr.length; i++){
//     arr[i]=Number(prompt('Enter Element'))
//     sum = sum+arr[i]
// }
// console.log(sum)



// max element from array

// let arr =  [10,20,30,40,120,50,60,70,80,90,100,150]
// let max = arr[0]
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)


// find second last element 

// let max = Math.max(arr[0], arr[1]);                                         // Set max as the larger of the first two elements
// let arr = [2, 2, 112, 5, 35, 65, 56, 650, 5, 654, 8, 2222, 2222];           // Define the array
// let secmax = Math.min(arr[0], arr[1]);                                      // Set secmax as the smaller of the first two elements

// for (let i = 2; i < arr.length; i++) {                                      // Loop through the rest of the array starting from index 2
//     if (arr[i] > max) {                                                     // If current element is greater than max
//         secmax = max;                                                       // Update secmax to the old max
//         max = arr[i];                                                       // Update max to the current element
//     } else if (arr[i] > secmax && arr[i] != max) {                          // If current element is greater than secmax and not equal to max
//         secmax = arr[i];                                                    // Update secmax to the current element
//     }
// }

// console.log('second max number ' + secmax);                                 // Print the second maximum number





















