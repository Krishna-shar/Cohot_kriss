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

// let prompt = require("prompt-sync")();     

// let Size = Number(prompt("Enter Array Size: "));  
// let arr = new Array(Size);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(prompt(`Enter Element ${i + 1}: `)); 
//     sum = sum+arr[i]
// }

// console.log("Sum of Elements:", sum);




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

// let arr = [2, 2, 112, 5, 35, 65, 56, 650, 5, 654, 8, 2222, 2222];           // Define the array
// let max = Math.max(arr[0], arr[1]);                                         // Set max as the larger of the first two elements
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





// Reverse the array 



// let arr = [10,20,30,40,50]
// let i = 0, j = arr.length-1

// while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

// Segregate 0 and 1


// let arr = [1,0,1,0,1,0,1,0,1,0,1,0]
// let i = 0, j = 0
// while(i<arr.length){
//     if(arr[i]==0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
// }
// i++
// }
// console.log(arr)






// Array right to by 1

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let temp = arr[arr.length-1]
// for(let i = arr.length-1; i>0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = temp
// console.log(arr)






// // Array left to by 1

// let arr2 = [1,2,3,4,5,6,7,8,9,10]
// let temp2 = arr2[0]
// for (let i = 0; i<arr2.length-1; i++){
//     arr2[i] = arr2[i+1]
// }
// arr2[arr2.length-1] = temp2
// console.log(arr2)





// Code to rotate array to the right side - shifting k times


// let arr3 = [1,2,3,4,5]                     // Define initial array
// console.log('older one ' + arr3)           // Print original array
// let k = 8                                  // Define how many times to rotate
// k = k % arr3.length                        // Use modulo if k is larger than array length (8 % 5 = 3)
// let count = 0                              // Counter variable to track how many times loop runs
// for(let j = 0; j<k; j++){                  // Outer loop: to rotate k times
//     count++                                // Increment counter on each iteration
//     let copy = arr3[0]                     // Copy first element (storing 1)
//     for(let i = 0; i<arr3.length-1; i++){  // Inner loop: to left shift array elements
//         arr3[i] = arr3[i+1]                // Shift each element one position to the left
//     }
//     arr3[arr3.length-1]= copy              // Place first element at the last position
// }
// console.log('newer one ' + arr3);          // Print rotated array
// console.log(count);                        // Print how many times the loop ran




// methord 2 

// let arr = [1,2,3,4,5,6,7]
// let temp = new Array(arr.length)
// let x = 14
// x = x % arr.length
// for (let i = 0 ; i<arr.length; i++){
//     temp[i] = arr[(i+x)%arr.length] 
// } 
// console.log(temp)

// methord 3

// let prompt = require('prompt-sync')()
// let arr = [1, 2, 3, 4, 5, 6]
// let k = Number(prompt('how many time you want to rotate your array'))
// k = k % arr.length


// function Reverse(arr, i, j) {
//     while (i < j) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }

// }
// Reverse(arr, 0, k - 1)
// Reverse(arr, k, arr.length - 1)
// Reverse(arr, 0, arr.length - 1)
// console.log(arr)


// Linear search an array - if element found print the indes else -1

// let prompt = require('prompt-sync')()
// let target = Number(prompt('Enter the number you want to search                                                                                                                                                                                                     '))
// let arr = [43,54,34,232,54,545,12,3,4,5,6]
// let index =-1
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]==target){
//         index = i
//         break
//     }
// }
// if(index==-1) console.log('Element not found')
//     else console.log('Element found on  ' + index + '  index')



// binary search 
// let prompt = require('prompt-sync')()
// let target = Number(prompt("enter the element you want to finds "))

// let arr = [10,20,30,40,50,60,70,80,90,100]
// function binerseacrh(arr, target){
//     let s = 0 , e = arr.length-1
//     while(s<=e){
//         let mid = Math.floor((s+e)/2)
//         if(arr[mid]==target) return mid
//         else if (arr[mid]>target)e=mid-1
//         else s = mid+1
//     }
//     return -1
// }
// if(binerseacrh(arr , target)===-1) console.log('not founds')
//     else console.log("element found")








// bubble sort 
// let prompt = require('prompt-sync')()
// let arr = [44,23,23,565,21,6354,2346,234,234]
// let n = arr.length
// for(let i=0; i<n-1; i++){
//     for (let j=0 ; j<n-1; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// let target = Number(prompt("enter the element you want to finds "))
// function binerseacrh(arr, target){
//     let s = 0 , e = arr.length-1
//     while(s<=e){
//         let mid = Math.floor((s+e)/2)
//         if(arr[mid]==target) return mid
//         else if (arr[mid]>target)e=mid-1
//         else s = mid+1
//     }
//     return -1
// }
// if(binerseacrh(arr , target)===-1) console.log('not founds')
//     else console.log("element found")















































