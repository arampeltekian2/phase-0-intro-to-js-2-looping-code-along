const names = ["Katelyn", "Armando", "Brock"]
function writeCards(namesArray, event){
let thankYouCards= [];   
    console.log(namesArray, event);
    for (let i=0; i < namesArray.length; i++){
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
        console.log(thankYouCards);
    }
    return thankYouCards;
}

function countDown(counter){ 
//let countDown = 0;
while (counter >= 0) {
  console.log(counter--)
}
}
