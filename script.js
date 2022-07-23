let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

function generateDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { Value: values[x], Suit: suits[i] };
      deck.push(card);
    }
  }
  console.log(deck);
  return deck;
}
let turn;
let players = [
  {
    name: "George",
    cards: [],
    chips: 0,
  },
  {
    name: "Angeline",
    cards: [],
    chips: 0,
  },
  {
    name: "Paula",
    cards: [],
    chips: 0,
  },
  {
    name: "Tom",
    cards: [],
    chips: 0,
  },
  {
    name: "Popi",
    cards: [],
    chips: 0,
  },
  {
    name: "Laura",
    cards: [],
    chips: 0,
  },
];

let dealerPosition;

let winner;

let roundNumber = 1;

let pot;

let communityCards = [];
//Cumulative number of chips during each round

//#2 add 2 cards to each player's cards property

//FIRST DEAL

//each card dealt will be done through this one function

//Functions Defined first

dealCard = (element) => {
  //#1 generate 2 random indices from cards
  let cardGiven = Math.floor(Math.random() * deck.length);
  element.cards.push(deck[cardGiven]);
  console.log(deck.length);
  //#3 remove the 2 cards from deck
  deck.splice(cardGiven, 1);
  console.log(element.cards);
  console.log(deck);
};

firstDeal = () => {
  players.forEach((element) => dealCard(element));
  players.forEach((element) => dealCard(element));
  console.log(players);
};

communityDeal = () => {
  let cardGiven = Math.floor(Math.random() * deck.length);
  communityCards.push(deck[cardGiven]);
  deck.splice(cardGiven, 1);
  console.log(communityCards);
  console.log(deck.length);
};

firstCommunity = () => {
  communityDeal();
  communityDeal();
  communityDeal();
};

secondCommunity = () => {
  communityDeal();
};
thirdCommunity = () => {
  communityDeal();
};

shownDown = () => {
  //#0 Create an array with the hands listed
  //#1 Create an array for each remaining players' cards added with the community cards
  //#2 Conditional statements to determine what kind of hand each player has and store that value
  //#3 Store all hands into an array ranking top to bottom hands
  //#4 Compare the index number of the hand each player has, and sort the players from 0 - 9
  //#5 Determine the winner by logging the first player in the array
  //#6 Add chips to the winning Players' chips property
};

firstBet = () => {
  //player position determined by index in players array
  //player at index 1 and 2 make bets
  let betChoice = ["fold", "bet"];
  players[1].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  players[2].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[1].bet);
  console.log(players[2].bet);
};

secondBet = () => {
  let betChoice = ["fold", "call the big blind", "raise"];
  players[3].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[3].bet);

  players[4].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[0].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);

  players[1].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[1].bet);

  //Back to the Big Blind
  betChoice = ["check", "raise"];
  players[2].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[2].bet);
};

thirdBet = () => {
  let betChoice = ["check", "fold", "call the big blind", "raise"];
  players[3].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[3].bet);

  players[4].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[0].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[1].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);

  players[2].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[1].bet);

  //Back to the Big Blind
  if (players[3].bet !== "fold") {
    betChoice = ["check", "raise"];
    players[3].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
    console.log(players[3].bet);
  }
};

fourthBet = () => {
  let betChoice = ["check", "fold", "call the big blind", "raise"];
  players[4].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[3].bet);

  players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[0].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[1].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);
  players[2].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[4].bet);

  players[3].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
  console.log(players[1].bet);

  //Back to the Big Blind
  if (players[4].bet !== "fold") {
    betChoice = ["check", "raise"];
    players[4].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
    console.log(players[4].bet);
  }
};

let startRound = document.querySelector("#start-round");
startRound.style.border = "none";
startRound.style.padding = "20px";

finishRound = () => {
  players.forEach((element) => {
    element.cards = [];
    //Chips remain the same
    console.log(players);
  });
  startRound.style.backgroundColor = "green";
  startRound.style.color = "white";
  startRound.addEventListener("click", startRound);
};

let endRound = document.querySelector("#end-round");
endRound.style.border = "none";
endRound.style.padding = "20px";

finishGame = () => {
  players.forEach((element) => {
    element.cards = [];
    element.chips = 0;
    console.log(players);
  });
};

beginRound = () => {
  generateDeck();

  firstDeal();
  firstBet(); //Only Big Blind & Small Blind makes a bet

  firstDeal(); //secondDeal() = firstDeal()
  secondBet(); //Only Under the Gun makes a bet

  let remainingPlayers = [];

  players.forEach((element) => {
    if (element.bet !== "fold") {
      remainingPlayers.push(element);
    }
  });

  if (remainingPlayers.length > 1) {
    firstCommunity();
    //Betting starts with position 3 Player now

    thirdBet();

    //community deal only occurs if number of players with current bet property value set to "fold" does not equal or exceed 5
    //Continue game code goes here
    remainingPlayers = [];
    players.forEach((element) => {
      if (element.bet !== "fold") {
        remainingPlayers.push(element);
      }
    });

    if (remainingPlayers.length > 1) {
      secondCommunity();

      fourthBet();

      remainingPlayers = [];
      players.forEach((element) => {
        if (element.bet !== "fold") {
          remainingPlayers.push(element);
        }
      });

      if (remainingPlayers.length > 1) {
        thirdCommunity();
        shownDown();
      }
    }
  } else {
    endRound.style.backgroundColor = "green";
    endRound.style.color = "white";
    endRound.addEventListener("click", finishRound);
  }
};

let startGame = document.querySelector("#start-game");
startGame.style.border = "none";
startGame.style.padding = "20px";

let endGame = document.querySelector("#end-game");
endGame.style.border = "none";
endGame.style.padding = "20px";

if (roundNumber <= players.length) {
  startGame.style.backgroundColor = "green";
  startGame.style.color = "white";
  startGame.addEventListener("click", beginRound);
} else {
  endGame.style.backgroundColor = "green";
  endGame.style.color = "white";
  endGame.addEventListener("click", finishGame);
}
