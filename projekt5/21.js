const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deck = [];
let playerHand = [];
let dealerHand = [];
let playerStopped = false;

function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ value, suit });
        });
    });
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCard() {
    return deck.pop();
}

function startGame() {
    document.getElementById('hit').style.visibility = 'visible'; 
    document.getElementById('stand').style.visibility = 'visible';
    document.getElementById('new-game').style.visibility = 'hidden';
    document.getElementById('result').style.visibility = 'hidden';

    createDeck();
    playerHand = [dealCard(), dealCard()];
    dealerHand = [dealCard(), dealCard()];

    displayHands();
    updateScores();
}

function displayHands() {
    document.getElementById('player-cards').innerHTML = playerHand.map(card => `${card.value} of ${card.suit}`).join('<br>');
    document.getElementById('dealer-cards').innerHTML = dealerHand.map(card => `${card.value} of ${card.suit}`).join('<br>');
}

function updateScores() {
    document.getElementById('player-score').textContent = `Játékos pontja: ${calculateScore(playerHand)}`;
    document.getElementById('dealer-score').textContent = `Osztó pontja: ${calculateScore(dealerHand)}`;
}

function calculateScore(hand) {
    let score = 0;
    let aceCount = 0;

    hand.forEach(card => {
        if (card.value === 'A') {
            score += 11;
            aceCount++;
        } else if (['K', 'Q', 'J'].includes(card.value)) {
            score += 10;
        } else {
            score += parseInt(card.value);
        }
    });

    while (score > 21 && aceCount > 0) {
        score -= 10;
        aceCount--;
    }

    return score;
}

function playerHit() {
    playerHand.push(dealCard());
    displayHands();
    updateScores();
    checkGameOver();
}

function dealerPlay() {
    playerStopped = true;
    while (calculateScore(dealerHand) < 17) {
        dealerHand.push(dealCard());
        displayHands();
        updateScores();
    }
    checkGameOver();
}

function newGame() {
    deck = [];
    playerHand = [];
    dealerHand = [];
    playerStopped = false;
    startGame();
}

function checkGameOver() {
    const playerScore = calculateScore(playerHand);
    const dealerScore = calculateScore(dealerHand);
    let gameOver = false; 

    if (playerScore > 21) {
        document.getElementById('result').textContent = 'Játékos vesztett!';
        gameOver = true;
    } else if (dealerScore > 21) {
        document.getElementById('result').textContent = 'Osztó vesztett!';
        gameOver = true;
    } else if (playerScore === 21) {
        document.getElementById('result').textContent = 'Játékos nyert!';
        gameOver = true;
    } else if (dealerScore === 21) {
        document.getElementById('result').textContent = 'Osztó nyert!';
        gameOver = true;
    }

    if (playerStopped) {
        if (playerScore > dealerScore) {
            document.getElementById('result').textContent = 'Játékos nyert!';
        } else if (playerScore < dealerScore) {
            document.getElementById('result').textContent = 'Osztó nyert!';
        } else {
            document.getElementById('result').textContent = 'Döntetlen!';
        }
    }

    if (playerStopped || gameOver) {
        document.getElementById('hit').style.visibility = 'hidden'; 
        document.getElementById('stand').style.visibility = 'hidden';
        document.getElementById('new-game').style.visibility = 'visible';
        document.getElementById('result').style.visibility = 'visible';
    }
}

document.getElementById('hit').addEventListener('click', playerHit);
document.getElementById('stand').addEventListener('click', dealerPlay);
document.getElementById('new-game').addEventListener('click', newGame);

document.getElementById('open').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');  
});

startGame();
