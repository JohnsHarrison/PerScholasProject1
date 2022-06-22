const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
const playerHand = document.getElementById('playerHand')
const playerField = document.getElementById('playerHand')
const cards = document.getElementsByClassName('card')
const draggableCards = document.querySelectorAll('div.handCard')
const container = document.querySelectorAll('div.fieldCard')
const computerField = document.getElementById('computerField')


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

//create a draggable cards
draggableCards.forEach(draggable =>{
    draggable.addEventListener('dragstart', (e) =>{
        console.log('drag start')
        draggable.classList.add('dragging')
    })
    draggable.addEventListener('dragend', (e) =>{
        draggable.classList.remove('dragging')
        console.log('drag end')
    })
})


// appends the draggable cards to the player field
container.forEach(container =>{
    container.addEventListener('dragover' , e =>{
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable)
    })
})

function getDragAfterElement(container, x){
const draggableElements = [...container.querySelectorAll('.draggableCards:not(.dragging)')]

draggableElements.reduce((closest, child) =>{
    const box = child.getBoundingClientRect()
    const offset = x - box.left - box.width / 2
    console.log(box)
}, { offest: Number.POSITIVE_INFINITY })
}


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
    //draw 4 cards from player deck.
    for (let i = 0; i < 4; i++){
        //set image for each card
       let image = document.createElement('img')
       image.src=deck[i].card_images[0].image_url
       playerHand.children[i].appendChild(image)
        hand.push(deck[i])
    }

    return hand
}
//create player field
function createComputerfield(deck){
    let field=[]
    //attempt to make what the computer plays feel random
    let num = Math.floor(Math.random()* (4-1)+1)
    console.log(num)
    for(let i=0; i < num; i++){
        let image = document.createElement('img')
        image.src=deck[i].card_images[0].image_url
        computerField.children[i].appendChild(image)
    
        field.push(deck[i])
    }

}
createPlayerHand(createDeck())
createComputerfield(createDeck())
// console.log(computerField.children[0])


function playGame(){
    let playerHealth = 4000
    let computerHealth = 4000

}
