// function fetchUserProfile(username){
//     return fetch(`https://api.github.com/users/${username}`)
//     .then((raw)=> raw.json())
// }
// fetchUserProfile("Krishna-shar").then(function(data){
//     console.log(data)
// })



function getUserRepose(username){
      return fetch(`https://api.github.com/users/${username}/repos`)
     .then((raw)=> raw.json())
 }
 getUserRepose("Krishna-shar").then(function(data){
     console.log(data)
 })
