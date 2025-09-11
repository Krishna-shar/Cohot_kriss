//  Fake API delay

// Task :- write a function fakeApiCall(Endpoint)that :- 
// :- Accepts a string like "users" or "posts"
// :- resolves with some dummy data fter a random delay (1-3 sec)

function fakeApiCall(endpoint) {

    const data = {
        users: ["Harsh", "Krishna", 'Shiva'],
        posts: ['hey chapms', 'great doind', 'let build this'],
    }
    let delay = Math.random() * 2000 + 1000
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(data[endpoint])
        }, delay)
    })
}
fakeApiCall("users")
.then(function(data){
    console.log(data)
})
fakeApiCall("posts")
.then(function(data){
    console.log(data)
})