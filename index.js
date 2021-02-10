// Code your solutions in this file
function writeCards(name, event) {
    let thankYous = []
    for (let i = 0; i < name.length; i++){
        thankYous.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    
    return thankYous
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);}
}