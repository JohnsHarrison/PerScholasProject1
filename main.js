const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?"
const playerHand = document.getElementById('playerHand')
const playerField = document.getElementById('playerHand')
const cards = document.getElementsByClassName('card')
const draggableCards = document.querySelectorAll('div.handCard')
const container = document.querySelectorAll('div.fieldCard')
const computerField = document.getElementById('computerField')
const playerHealth = document.getElementById('playerHealth')
const computerHealth = document.getElementById('computerHealth')
const playerDeck = document.getElementById('playerDeck')


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

// function getDragAfterElement(container, x){
// const draggableElements = [...container.querySelectorAll('.draggableCards:not(.dragging)')]

// draggableElements.reduce((closest, child) =>{
//     const box = child.getBoundingClientRect()
//     const offset = x - box.left - box.width / 2
//     console.log(box)
// }, { offest: Number.POSITIVE_INFINITY })
// }



// while (playerHand.children.length < 4 ){
//     let epmtySpace = document.createElement('div')
//         epmtySpace.className = "handCard"
//         playerHand.push(epmtySpace)
// }



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
    for(let i=0; i < num; i++){
        let image = document.createElement('img')
        image.src=deck[i].card_images[0].image_url
        computerField.children[i].appendChild(image)
    
        field.push(deck[i])
    }

}

// console.log(computerField.children[0])
// console.log(createPlayerHand(createDeck()))

function draw(deck){
if(playerHand.children.length < 4){
   let draw = document.createElement('button')
    playerDeck.appendChild(draw)
    draw.addEventListener('click', () =>{
        let card =[]
        let image = document.createElement('img')
        image.src=deck[i].card_images[0].image_url
        playerHand.children[i].appendChild(image)
         card.push(deck[i])
    })

}

}


function playCards(

    
)






function playGame(){
    let pHealth = 4000
    let cHealth = 4000
    let pHealthRemaining = document.createElement('p')
    let cHealthRemaining = document.createElement('p')
    pHealthRemaining.innerText=pHealth
    playerHealth.appendChild(pHealthRemaining)
    cHealthRemaining.innerText=cHealth
    computerHealth.appendChild(cHealthRemaining)

    let pDeck = createDeck()
    let cDeck = createDeck()

    createPlayerHand(pDeck)


    // use later to updat health 
    // pHealth -= 300
    // pHealthRemaining.innerText=pHealth
    // console.log(playerHealth)
    // console.log('should say 3700')
    // pHealth -= 700
    // pHealthRemaining.innerText=pHealth
    // console.log(playerHealth)
    // console.log('should say 3000')




    createPlayerHand(pDeck)
    // createComputerfield(cDeck)
    draw(pDeck)

    
    
}

playGame()