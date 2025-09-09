function getDetails(username,cd){
    setTimeout(function(){
        console.log("sending a friend request")
    },1000)
    setTimeout(function(){
        console.log('fetiching data....')
    },3000)
    setTimeout(function(){
        cd()
    },6000)

}

getDetails('krishna', function(){
    console.log('data saved in files')
})