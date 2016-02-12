//Review loops and if/else: Dragon slaying game

var slaying = true
var youHit = Math.floor(Math.random() * 2)
//This sets youHit to a random number that's either 0 (which JavaScript reads as false) or 1 (which JavaScript reads as true).
var damageThisRound = Math.floor(Math.random()*5 + 1)
//This sets damageThisRound to a random number that's between 1 and 5 (up to and including 5).
var totalDamage = 0

while (slaying){
    if (youHit === 1){
        console.log("you hit the dragon!");
        totalDamage += damageThisRound
        if (totalDamage >=4){
            console.log("You slew the dragon!!!");
            slaying = false
        }
        else{
            youHit = Math.floor(Math.random() * 2);
        }
    }
    
    else {
        console.log("the dragon defeated you!");
    }
    slaying = false

}