let dealerCardEl = document.querySelector(".dealerCards");
let dealerSumEl = document.querySelector(".dealerSum");
let playerOneCardEl = document.querySelector(".playerOneCards");
let playerOneSumEl = document.querySelector(".playerOneSum");
let playerOneNewCardEl = document.querySelector("#playerOneNewCard");
let playerTwoCardEl = document.querySelector(".playerTwoCards");
let playerTwoSumEl = document.querySelector(".playerTwoSum");
let playerTwoNewCardEl = document.querySelector("#playerTwoNewCard");

let startGameButtonEl = document.querySelector("#startGameButton");
startGameButtonEl.addEventListener("click", startGame)
let newGameButtonEl = document.querySelector("#newGameButton");
newGameButtonEl.addEventListener("click", newGame);

let playerOneMsgEl = document.querySelector(".playerOneMessage");
let playerTwoMsgEl = document.querySelector(".playerTwoMessage")
let dealerMsgEl = document.querySelector(".dealerMessage")

let isAlive = false;
let hasBlackjack = false;
let dealerCards = [];
let playerOneCards = [];
let playerTwoCards = [];
let hasGameStarted = false;
let playerOneSum = 0;
let playerTwoSum = 0;
let dealerSum = 0;

function getRandomCard(player) {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    
    if (randomCard > 10) {
        return 10;
    } else if (randomCard === 1) {
        let aceValue = prompt(`Player ${player}, you drew an Ace! Do you want it to be 1 or 11?`);
        return aceValue === "11" ? 11 : 1;
    } else {
        return randomCard;
    }
}



function startGame() {
    isAlive = true;

    startGameButtonEl.disabled = true;
    startGameButtonEl.style.backgroundColor = "gray";

    let playerOneFirstCard = getRandomCard("One");
    let playerOneSecondCard = getRandomCard("One");
    let playerTwoFirstCard = getRandomCard("Two");
    let playerTwoSecondCard = getRandomCard("Two");
    let dealerFirstCard = getRandomCard("Dealer");
    let dealerSecondCard = getRandomCard("Dealer");

    playerOneCards = [playerOneFirstCard, playerOneSecondCard];
    playerTwoCards = [playerTwoFirstCard, playerTwoSecondCard];
    dealerCards = [dealerFirstCard, dealerSecondCard];

    playerOneSum = playerOneFirstCard + playerOneSecondCard;
    playerTwoSum = playerTwoFirstCard + playerTwoSecondCard;
    dealerSum = dealerFirstCard + dealerSecondCard;

    renderGame();
}

function renderGame() {
    playerOneCardEl.textContent = "Cards: ";
    playerTwoCardEl.textContent = "Cards: ";
    dealerCardEl.textContent = "Card: ";

    for (let i = 0; i < playerOneCards.length; i++) {
        playerOneCardEl.textContent += playerOneCards[i] + " ";
    }
    for (let j = 0; j < playerTwoCards.length; j++) {
        playerTwoCardEl.textContent += playerTwoCards[j] + " ";
    }
    for (let k = 0; k < dealerCards.length; k++){
        dealerCardEl.textContent += dealerCards[k] + " ";
    }


    playerOneSumEl.textContent += playerOneSum;
    playerTwoSumEl.textContent += playerTwoSum;
    dealerSumEl.textContent += dealerSum;

    if (playerOneSum || playerTwoSum <21) {
        playerOneMsgEl.textContent = "HIT OR STAY?";
        playerTwoMsgEl.textContent = "HIT OR STAY?";
    } else if (playerOneSum || playerTwoSum === 21) {
        playerOneMsgEl.textContent = "PLAYER ONE HAS BLACKJACK!!!";
        playerTwoMsgEl.textContent = "PLAYER TWO HAS BLACKJACK!!!";
    } else {
        playerOneMsgEl.textContent = "PLAYER ONE IS BUST!";
        playerTwoMsgEl.textContent = "PLAYER TWO IS BUST!";
    }
    if (dealerSum < 17) {
        dealerMsgEl.textContent = `Dealer has ${dealerSum}, Dealer will HIT!`
    } else if (dealerSum < 21) {
        dealerMsgEl.textContent = `Dealer has ${dealerSum}, Dealer will STAY!`
    } else if (dealerSum === 21) {
        dealerMsgEl.textContent = `Dealer has ${dealerSum}, Dealer has BLACKJACK!`
    } else {
        dealerMsgEl.textContent = `Dealer has ${dealerSum}, Dealer is BUST!`
    }
}

function newGame() {
    let confirmNewGame = confirm("Game is currently in progress. Do you want to start a New Game?")

    if (confirmNewGame) {
        isAlive = false;
        hasBlackjack = false;
        hasGameStarted = false;
        dealerCards = [];
        playerOneCards = [];
        playerTwoCards = [];
        playerOneSum = 0;
        playerTwoSum = 0;
        dealerSum = 0;
        
        // Reset displayed text
        playerOneCardEl.textContent = "Cards: ";
        playerTwoCardEl.textContent = "Cards: ";
        dealerCardEl.textContent = "Card: ";
        playerOneSumEl.textContent = "Sum: ";
        playerTwoSumEl.textContent = "Sum: ";
        dealerSumEl.textContent = "Sum: ";
        playerOneMsgEl.textContent = "START GAME!";
        playerTwoMsgEl.textContent = "START GAME!"
    
        // Re-enable the start button
        startGameButtonEl.disabled = false;
        startGameButtonEl.style.backgroundColor = "";
    }
   
}