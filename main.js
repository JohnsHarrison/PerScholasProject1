const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
const playerHand = document.getElementById('playerHand')
const playerField = document.getElementById('playerHand')
const cards = document.getElementsByClassName('card')


let response = await axios.get(`${BASE_URL}type=Normal%20Monster&level=lt5`)
console.log(response.data.data)

//You can also use the following equation symbols for atk, def and level:
// "lt" (less than), "lte" (less than equals to), "gt" (greater than), "gte" (greater than equals to).
// Examples: atk=lt2500 (atk is less than 2500), def=gte2000 (def is greater than or equal to 2000) and level=lte8 (level is less than or equal to 8).
// The specific results from this endpoint are cached for 2 days (172800 seconds) but will be manually cleared upon new card entry.
//use "%20" in place of spaces and & to add more perameters. for example type=Normal%20Monster&level=lt5

// let response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster')
// console.log(response)
// let response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?level=lt5')
// console.log(response)


playerHand.forEach(card=> {
    playerHand.addEventListener('dragstart')
    console.log('drag start')
});

function createDeck(){
 let playerDeck=[]
 for(let i=0;i < 50; i++){
// create a random number 
 let ranNum = Math.floor(Math.random()* 505)
 playerDeck.push(response.data.data[ranNum])
 }

// console.log(playerDeck)
return playerDeck   
}
// createDeck()
// createDeck()

//create players hand from their deck
function createPlayerHand(deck){
    let hand = []
    // console.log(deck)
    for (let i = 0; i < 4; i++){
        hand.push(deck[i])
    }
    // console.log(hand)
    // console.log(hand[0].card_images[0].image_url)
    //set the card images in players hand 
    playerHand.children[0].children[0].src=hand[0].card_images[0].image_url
    playerHand.children[1].children[0].src=hand[1].card_images[0].image_url
    playerHand.children[2].children[0].src=hand[2].card_images[0].image_url
    playerHand.children[3].children[0].src=hand[3].card_images[0].image_url

    return hand
}

createPlayerHand(createDeck())


