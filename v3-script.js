// let roundState = "end";

//#1 Capture DOM Elements
let startRound = document.querySelector("#start-round");
let comBox = document.querySelector('.community-box')
let betButtons = document.querySelectorAll('.betting-buttons')
let myCards = document.querySelector('.my-cards')
let communityCards = document.querySelector('.community-cards')
let myChoice = document.querySelector("#player-4 .bet-choice");
let comDes = document.querySelector('.com-des')
let showdownCards = document.createElement('div')
showdownCards.classList.add('showdown-cards')
let cardDisplays = document.getElementsByClassName('card')
let choiceDisplays = document.getElementsByClassName('bet-choice')

// TODO: Enter names - prompt https://www.w3schools.com/jsref/met_win_prompt.asp

//#2 Create Variables
let players = [
  {
    name: "George",
    cards: [],
    chips: 0,
  },
  {
    name: "Popi",
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
    name: "Angeline",
    cards: [],
    chips: 0,
  },
  {
    name: "Laura",
    cards: [],
    chips: 0,
  },
];

let deck = [];
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = [
"A",
2,
3,
4,
5,
6,
7,
8,
9,
10,
"J",
"Q",
"K",
];

let communityChosen = [];
let cardGiven;

let remainingPlayers = [];

let winner;
let winningHand;
let winnerTie;

//#3 Functions 
//#3.1 Button State Functions 

deactivateButton = (element) => {
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
}

activateButton = (element) => {
  element.style.backgroundColor = 'green';
  element.style.color = 'white';
}

//#3.2 Cleanup UI
removeDisplay = (element, content) => element.innerText = content

//#3.3 Display all players' names
let i = 0;
players.forEach((element) => {
    let playerSpot = document.getElementById(`player-${i}`);
    let finalName = document.createElement('p')

    finalName.innerHTML = players[i].name;
    playerSpot.appendChild(finalName);
    i++; 
})

//#3.4 Button-trigger functions #1 Start Round #2 Deal Cards to Players #3 Deal Community Cards #4 Start Betting #5 Make Choice #6 Showdown #7 Reveal Winner #8 End Round
generateDeck = () => {
  //Set Timeout begins 
  suits.forEach(element => {
    let cardSuit = element;
    values.forEach(element => {
        let card = { value: element, suit: cardSuit };
        deck.push(card);
    })
  })
   //Set Timeout ends
}

//Used for Dealing EACH card for players && community
dealCard = (element) => {
  //#1 generate 2 random indices from cards
  let cardGiven = Math.floor(Math.random() * deck.length);
  element.push(deck[cardGiven]);
  //#3 remove the 2 cards from deck
  deck.splice(cardGiven, 1);
};

//3.2 Function to Actually Deal Cards
// playDeal.addEventListener("click", 
firstDeal = () => {
  deactivateButton(playDeal)
  players.forEach((element) => dealCard(element.cards));
  players.forEach((element) => dealCard(element.cards));
}

startBetting = () => {
   let betChoice = ["check", "fold", "call the big blind", "raise"];

   players[0].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[0].bet);
   let firstChoice = document.querySelector("#player-0 .bet-choice");
   firstChoice.innerHTML = `${players[0].bet}`;

   players[1].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[1].bet);
   let secondChoice = document.querySelector("#player-1 .bet-choice");
   secondChoice.innerHTML = `${players[1].bet}`;

   players[2].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[2].bet);
   let thirdChoice = document.querySelector("#player-2 .bet-choice");
   thirdChoice.innerHTML = `${players[2].bet}`;

   players[3].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[3].bet);
   let fourthChoice = document.querySelector("#player-3 .bet-choice");
   fourthChoice.innerHTML = `${players[3].bet}`;
  }

  makeChoice = (e) => {
  
    betButtons.forEach((element) => {
      deactivateButton(element)
    })

    players[4].bet = e.target.innerHTML;
    let myChoice = document.querySelector("#player-4 .bet-choice");
    myChoice.innerHTML = `${players[4].bet}`;
    console.log(players[4].bet);
   
    players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];

    console.log(players[5].bet);
    let sixthChoice = document.querySelector("#player-5 .bet-choice");
    sixthChoice.innerHTML = `${players[5].bet}`;

  }

showdown = () => {
    players.forEach((element) => {
        if (element.bet !== "fold") {
        remainingPlayers.push(element);
        }
    });

    //Making the hands of each remaining player
    remainingPlayers.forEach((element) => {
      if (element.name != players[4].name) {
            let playerName = document.createElement('p')
            playerName.innerHTML = `${element.name}`

            comDes.appendChild(playerName);
            comDes.style.width = `${comBox.style.width}`

            comBox.appendChild(showdownCards)

            element.cards.forEach((element) => {
                let thisCard = document.createElement('div')
                thisCard.classList.add('card')
                thisCard.innerHTML = `${element.value}${element.suit}`

                showdownCards.appendChild(thisCard)
            })
        }
    })

        remainingPlayers.forEach((element) => {
            element.hand = [];
            element.handNum;
            element.hand.push(...element.cards);
            element.hand.push(...communityChosen);
            element.arr = [];
        })

        remainingPlayers.forEach((element) => {
            let suitOfficial = element.hand[0].suit;
            let valOfficial = element.hand[0].value;
            let valOfficial2 = element.hand[1].value;
            element.arr = element.hand.map((element) => element.value)
            element.hand.forEach((element) => {
            if (element.value === "A") {
                element.value = 1;
            } else if (element.value === "J") {
                element.value = 11;
            } else if (element.value === "Q") {
                element.value = 12;
            } else if (element.value === "K") {
                element.value = 13;
            }
            console.log(element);
            });

            element.arr.sort();

            const differenceAry = element.arr.slice(1).map(function (n, i) { return n - element.arr[i]; })
            const areConsecutive = differenceAry.every(value => value == 1)
            console.log(areConsecutive)

            // https://javascript.plainenglish.io/6-tips-to-improve-your-conditional-statements-for-better-readability-56256c5a5245
            if (element.hand.every((element) => element.suit === suitOfficial) 
            && element.hand.find((element) => element.value === 1) 
            && element.hand.find((element) => element.value === 13) 
            && element.hand.find((element) => element.value === 12) 
            && element.hand.find((element) => element.value === 11) 
            && element.hand.find((element) => element.value === 10)) 
            {
            element.hand = `Royal Flush`;
            element.handNum = 1;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (element.hand.every((element) => element.suit === suitOfficial) 
            && areConsecutive) 
            {
            element.hand = `Straight Flush`;
            element.handNum = 2;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            //Check that middle value is equal to (one on left && 2 on right) OR (1 on right && 2 on left)
            else if (((element.arr[2] === element.arr[1]) 
            && (element.arr[2] === element.arr[3]) 
            && (element.arr[2] === element.arr[4]))
            || ((element.arr[2] === element.arr[1]) 
            && (element.arr[2] === element.arr[0]) 
            && (element.arr[2] === element.arr[3]))) 
            {
            element.hand = `Four-of-a-Kind`;
            element.handNum = 3;
            console.log(element.arr)
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            //Check that middle value is equal to (2 on left) OR (2 on right) 
            else if (((element.arr[2] === element.arr[1]) 
            && (element.arr[2] === element.arr[0]) 
            && (element.arr[3] === element.arr[4]))
            || ((element.arr[2] === element.arr[3]) 
            && (element.arr[2] === element.arr[4]) 
            && (element.arr[0] === element.arr[1]))) 
            {
            element.hand = `Full House`;
            element.handNum = 4;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (element.hand.every(element => element.suit === suitOfficial)) 
            {
            element.hand = `Flush`;
            element.handNum = 5;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (!element.hand.every((element) => element.suit === suitOfficial) 
            && areConsecutive) 
            {
            element.hand = `Straight`;
            element.handNum = 6;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (((element.arr[2] === element.arr[1]) 
            && (element.arr[2] === element.arr[0]) 
            && !(element.arr[3] === element.arr[4]))
            || ((element.arr[2] === element.arr[3]) 
            && (element.arr[2] === element.arr[4]) 
            && !(element.arr[0] === element.arr[1])) 
            || ((element.arr[2] === element.arr[3]) 
            && (element.arr[2] === element.arr[1]) 
            && !(element.arr[0] === element.arr[4]))) 
            {
            element.hand = `Three-of-a-Kind`;
            element.handNum = 7;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (((element.arr[0] == element.arr[1]) 
            && (element.arr[2] === element.arr[3]))
            || ((element.arr[4] === element.arr[3]) 
            && (element.arr[2] === element.arr[1]) 
            || ((element.arr[0] === element.arr[1]) 
            && (element.arr[3] === element.arr[4])))) 
            {
            element.hand = `Two-Pair`;
            element.handNum = 8;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (((element.arr[0] === element.arr[1]) 
            || (element.arr[1] === element.arr[2]) 
            || (element.arr[2] === element.arr[3]) 
            || (element.arr[3] === element.arr[4]))) 
            {
            element.hand = `One-Pair`;
            element.handNum = 9;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }

            else if (!((element.arr[0] === element.arr[1]) 
            || (element.arr[1] === element.arr[2]) 
            || (element.arr[2] === element.arr[3]) 
            || (element.arr[3] === element.arr[4]))) 
            {
            element.hand = `High Card`;
            element.handNum = 10;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
            }
        }
    )
}

revealWinner = () => {
    remainingPlayers.sort(function (a, b) {
        return a.handNum - b.handNum;
    });

    winningHand = remainingPlayers[0].hand;

    if (remainingPlayers[0].handNum != remainingPlayers[1].handNum && remainingPlayers[0].handNum != remainingPlayers[2].handNum && remainingPlayers[0].handNum != remainingPlayers[3].handNum && remainingPlayers[0].handNum != remainingPlayers[4].handNum && remainingPlayers[0].handNum != remainingPlayers[5].handNum) {
        winner = remainingPlayers[0].name;
        winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
    }

    else {
        winner = "tied";
        winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
    }
}

finishRound = () => {
    deactivateButton(startRound)

    //Reset Players' Cards, Chips, Bet, & Hand in Database
    players.forEach((element) => {
        element.cards = [];
        element.chips = 0;
        element.bet = "";
        element.hand = [];
        });

    //Replace Bet Choices on Display
    choiceDisplays.forEach(element => removeDisplay(element, `No bet`))
        
    //Remove Player, Community & Showdown Cards from Display 
    cardDisplays.forEach(element => removeDisplay(element, ``))

    //Remove Winner Reveal from Display 
    removeDisplay(winnerReveal, ``)
}
      
beginRound = () => {
    if(startRound.innerHTML === "Start Round") {
        deactivateButton(startRound)
        generateDeck()

        startRound.innerHTML = "Deal cards to players";
        activateButton(startRound)
    }

    else if (startRound.innerHTML === "Deal cards to players") {
        deactivateButton(startRound)
        firstDeal()

        players[4].cards.forEach(element => { 
            let thisCard = document.createElement('div')
            thisCard.classList.add('card')

            thisCard.innerHTML = `${element.value}${element.suit}`
            myCards.appendChild(thisCard)
        })

        startRound.innerHTML = 'Deal Community Cards'
        activateButton(startRound)
    }

    else if (startRound.innerHTML === 'Deal Community Cards') {
        deactivateButton(startRound)

        //Call Functions 
        dealCard(communityChosen)
        dealCard(communityChosen)
        dealCard(communityChosen)

        //Add Community Cards to Display

        communityChosen.forEach(element => {
            let thisCard = document.createElement('div')

            thisCard.classList.add('card')

            thisCard.innerHTML = `${element.value}${element.suit}`
            communityCards.appendChild(thisCard)
        })

        startRound.innerHTML = `Start Betting`;
        activateButton(startRound)
    }

    //!!While generating deck, play animation of a deck forming, make sure it takes an amount of time 

    else if(startRound.innerHTML = 'Start Betting') {
        deactivateButton(startRound)
        startBetting();

        betButtons.forEach((element) => {
            activateButton(element)
        })

        myChoice.innerHTML = `My turn`;

        betButtons.forEach((btn) => {
            btn.addEventListener('click', makeChoice)
        })

        startRound.innerHTML = 'Showdown';
        activateButton(startRound)
    }

    else if (startRound.innerHTML = 'Showdown') {
        deactivateButton(showdown)
        showdown();

        startRound.innerHTML = 'Reveal Winner'
        activateButton(startRound);
    }

    else if (startRound.innerHTML = 'Reveal Winner') {
        deactivateButton(startRound)
        revealWinner();

        startRound.innerHTML = 'End Round'
        activateButton(startRound)
    }

    else if(startRound.innerHTML = 'End Round') {
        deactivateButton(startRound)
        finishRound();

        startRound.innerHTML = 'Start Round'
        activateButton(startRound)
    }
}

//Actual running JavaScript
activateButton(startRound)

startRound.addEventListener('click', beginRound)
