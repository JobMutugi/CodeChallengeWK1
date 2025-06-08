function calculateBodaFare(){
//the basefare for getting on the bike
let Basefare = 50    
//distance in kilometers
let kilometers = prompt("How long would you like to travel")
kilometers = Number(kilometers)


//cost per kilometer
let cost = 30; 
let totalFare = Basefare + (kilometers * cost)

if(kilometers && kilometers) {
    alert(`so the distance is ${kilometers}`)
    console.log(`The distance is ${kilometers}`)
    console.log(`Your destination will cost ${cost}` )
    console.log(`Your total fare is ${totalFare} KES`)
    alert(`Your total fare is ${totalFare} KES`)
} else {
    alert("You have not entered a valid distance");
}

}




calculateBodaFare()
