// let prompt = require('prompt-sync')()
// let n = Number(prompt('enter the number to check if its is a strong number '))
// let copy = n
// let ans = 0
// while(n>0){
//     let dig = n%10
//     let fact = 1
//     for(let i = 1; i <=dig; i++){
//         fact*=i
//     }
//     ans+=fact
//      n = Math.floor(n / 10);
// }
// if(copy===ans)console.log('Strong number');
// else console.log(' Not a strong number')


// let prompt = require('prompt-sync')()
// let size = Number(prompt(' Enter the size of an Array : '))
// let arr = new Array(size)
// sum = 0
// for (let i = 0 ; i<arr.length; i++){
//     arr[i] = Number(prompt(`Enter Element ${i + 1} : `))
//     sum = sum+arr[i]

// }

// console.log('sum of Array '+ sum)



// let arr = [10,20,30,40,50,60,70,80,90,100,12,5,1,54541,54,541,541,41,328273829267237641,3541102,41,54,5412,41,85748,742,13,43,7463565,4,654,64,6546,4654,87454,654,654,654,65,46,43,5435,435,435,435,4354,35,435,4,898798,79,798,73532,4,35465,434,8978,4,54,31,3,24,35743.2,3,36,435,45,435,4,534,354,53,21,5,45,4,1,547,52,2,458,54,54,12,74,8,748,54,15,74,874,]
// let max  = arr[0]
//  for (let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
//  }
//  console.log(max)



// let arr = [1,0,1,0,1,0,1,0,1,0,1,0]
// let i = 0, j = 0
// while(i<arr.length){
//     if(arr[i]>0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
// }
// i++
// }
// console.log(arr)

const word = "Racecar";
const normalized = word.toLowerCase();
const isPalindrome =  normalized.split('').reverse().join('');
if(normalized === isPalindrome){
    console.log('Palindrome')
}
else(console.log('guu khalo'))

// console.log(isPalindrome ? `${word} is a palindrome` : `${word} is NOT a palindrome`);


