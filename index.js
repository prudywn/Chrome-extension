let player = {
   name : 'Bentley', 
   chips : 1000
}

let cards = []
let sum = 0 
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': £' + player.chips


function getRandomCard(){
   let randomCard = Math.floor( Math.random()*13 ) + 1
    if (randomCard === 1){
        return 11
    } else if (randomCard >= 11){
        return 10
    } else{
        return randomCard
    }
}


function startGame(){
    isAlive = true
    firstCard =  Math.floor( Math.random()*13 ) + 1
    secondCard =  Math.floor( Math.random()*13 ) + 1
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame (){
    cardsEl.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + ', '
    }
    
    sumEl.textContent = 'Sum: ' + sum
      
      if (sum < 21){
       message = "Do you want to draw a new card? 🙂"
    
    } else if (sum === 21){
       message = "Nice Play! You've got blackjack! 🥳"
       hasBlackjack = true
    
    } else {
       message = "You're out of the game! 😭"
       isAlive = false
      
    }
   
    messageEl.textContent = message
}

function newCard (){
   if (isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
}

