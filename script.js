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

let isAlive = false;
let hasBlackjack = false;
let dealerCards = [];
let playerOneCards = [];
let playerTwoCards = [];
let gameInProgress = false;
let playerOneSum = 0;
let playerTwoSum = 0;
let dealerSum = 0;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard >= 11) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true;
    let playerOneFirstCard = getRandomCard();
    let playerOneSecondCard = getRandomCard();
    let playerTwoFirstCard = getRandomCard();
    let playerTwoSecondCard = getRandomCard();
    let dealerFirstCard = getRandomCard();
    let dealerSecondCard = getRandomCard();
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
}

