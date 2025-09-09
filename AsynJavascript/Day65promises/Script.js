// const pr = new Promise((res,rej)=>{
//     console.log('abra ka dabra')
//     console.log('abra ka dabraaaa')
//     console.log('abra ka dabraaaaaaaa')
//     rej()

// })
// pr.then(()=>{
//     console.log('resolved')
// }).catch(()=>{
//     console.log('rejected')
// })


// function steone() {
//     return new Promise((res, rej) => {
//         console.log('Step 1')
//         res()
//     })

// }
// function steTwo() {
//     return new Promise((res, rej) => {
//         console.log('Step 2')
//         res()
//     })

// }
// function steThree() {
//     return new Promise((res, rej) => {
//         console.log('Step 3')
//         res()
//     })

// }
// steone().then(steTwo).then(steThree).then(function () {
//     console.log('done all steps')
// })



// create a function orderfood that returs a promise It should  resolve after 2 second with pizza delivered.


//  function orderfood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let chance  = Math.random() < 0.5
//             if(chance) res();
//                 else rej();

//         },2000)
//     })
//  }

//  orderfood().then(function (){
//     console.log("Pizza Delivered")
//  })
//  .catch(function(){
//     console.log("Delivery Failes")
//  })



// chained promises : User -> Postes -> Comments
// :- create getUser()-> resolve with {id : 1, name : "Harsh"}
// :- getPosts(postID)-> resolves with list of post titles
// :- getComments(PostId)-> resolves with comments

function getUser() {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res({ id: 1, name: "Harsh" })
        }, 1000)
    })
}
function getPosts(userID) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(['title 1', 'title 2'])
        }, 1000)
    })
}

function getComments(PostId) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            res(['Great content', 'amazing content'])
        }, 1000)
    })
}

getUser()
    .then(function (data) {
        console.log(`data fetched : ${data.name}`)
        return getPosts(data.id)
    })
    .then(function (titles) {
        console.log(titles)
        return getComments('kjsdhfkjh')
    })
    .then(function (cmts) {
        console.log(cmts)
    })
    .finally(function () {
        console.log('All data fetched')
    })
