"use strict"
// let roundState = "end";

//#1 Capture DOM Elements
let startRound = document.querySelector("#start-round");
let comBox = document.querySelector('.community-box')

let betButtons = document.getElementsByClassName('betting-buttons')
let buttonsContainer = document.querySelector('.buttons')

let myCards = document.querySelector('.my-cards')
let communityCards = document.querySelector('.community-cards')
let myChoice = document.querySelector("#player-4 .bet-choice");
let comDes = document.querySelector('.com-des')

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

const handOptions = ['Royal Flush', 'Straight Flush', 'Four-of-a-Kind', 'Full House', 'Flush', 'Straight', 'Three-of-a-Kind', 'Two-Pair', 'One-Pair', 'High Card']

let winner;
let winningHand;
let winnerTie;

//#3 Functions 
//#3.1 Button State Functions 

const deactivateButton = (element, callbackFunction) => {
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
  element.removeEventListener('click', callbackFunction)
}

const activateButton = (element, callbackFunction) => {
  element.style.backgroundColor = 'green';
  element.style.color = 'white';
  element.addEventListener('click', callbackFunction)
}

//#3.2 Cleanup UI
const removeDisplay = (element, content) => element.innerText = content

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
const generateDeck = () => {
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
const dealCard = (element) => {
  //#1 generate 2 random indices from cards
  let cardGiven = Math.floor(Math.random() * deck.length);
  element.push(deck[cardGiven]);
  //#3 remove the 2 cards from deck
  deck.splice(cardGiven, 1);
};

//3.2 Function to Actually Deal Cards
// playDeal.addEventListener("click", 
const firstDeal = () => {
  players.forEach((element) => dealCard(element.cards));
  players.forEach((element) => dealCard(element.cards));
}

const startBetting = () => {
    console.log('Start betting function initiated')
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

    myChoice.innerHTML = `My turn`;

    let buttonsBox = document.createElement('div')
    buttonsBox.setAttribute('id','betting-box')
    
    buttonsBox.addEventListener('click', handleClick)
    betChoice.forEach(element => {
     let createButtons = document.createElement('button')
     createButtons.classList.add('.betting-buttons')
     createButtons.innerText = element;
     createButtons.style.backgroundColor = 'green'
     createButtons.style.color = 'white'

     buttonsBox.appendChild(createButtons)
     
     buttonsContainer.appendChild(buttonsBox)
     })

    function handleClick(e) {
 // buttonsBox.removeEventListener('click', makeChoice(e))
        // buttonsBox.removeDisplay()
    
        // betButtons.forEach(element => element.parentNode.removeChild(button))

        // buttonsBox.removeEventListener('click', handleClick)
        
        //Or getting its parent and removing its child, empty out a list

       

        players[4].bet = e.target.innerHTML;
        let myChoice = document.querySelector("#player-4 .bet-choice");
        myChoice.innerHTML = e.target.innerHTML;
        console.log(players[4].bet);
       
        players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];
    
        console.log(players[5].bet);
        let sixthChoice = document.querySelector("#player-5 .bet-choice");
        sixthChoice.innerHTML = `${players[5].bet}`;


        activateButton(startRound, showdownFunction)
        startRound.innerHTML = `Showdown`;
        buttonsBox.remove()
      }
     
    //  betButtons.forEach((element) => {
    //     element.style.backgroundColor = 'green';
    //     element.style.color = 'white';
    //     element.addEventListener('click', makeChoice(e))
    //  })

    //  betButtons.forEachaddEventListener('click', makeChoice(e)) 
}

const showdownFunction = () => {
console.log('Showdown Function initiated')
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
            
            let showdownCards = document.createElement('div')
            showdownCards.classList.add('showdown-cards')
            comBox.appendChild(showdownCards)

            element.cards.forEach((element) => {
                let thisCard = document.createElement('div')
                thisCard.classList.add('card')
                thisCard.innerHTML = `${element.value}<br>${element.suit}`

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
            element.arr = element.hand.map((el) => el.value)
            element.hand.forEach((el) => {
            if (el.value === "A") {
                el.value = 14;
            } else if (el.value === "J") {
                el.value = 11;
            } else if (el.value === "Q") {
                el.value = 12;
            } else if (el.value === "K") {
                el.value = 13;
            }
            });

            element.arr.sort();

            const differenceAry = element.arr.slice(1).map(function (n, i) { return n - element.arr[i]; })
            const areConsecutive = differenceAry.every(value => value == 1)

            const royalFlush = element.hand.every(el => el.value > 9)
            const sameSuits = element.hand.every((el) => el.suit === element.hand[0].suit)

            const firstFourOfAKind = element.arr.every(el => {if(el != element.arr[0])
                {
                    el === element.arr[2]
                }}
            )

            const secondFourOfAKind = element.arr.every(el => {if(el != element.arr[4])
                {
                    el === element.arr[2]
                }
              }
            )

            const firstFullHouse = element.arr.every(el => {if(el != element.arr[0] && el != element.arr[1])
                {
                    el === element.arr[2]
                }}
            )

            const secondFullHouse = element.arr.every(el => {if(el != element.arr[4] && el != element.arr[3])
                {
                    el === element.arr[2]
                }
              }
            )

            const thirdFullHouse = element.arr.every(el => {if(el != element.arr[0] && el != element.arr[4])
                {
                    el === element.arr[2]
                }
              }
            )

            const firstTwoPair = element.arr.every(el => {if(el != element.arr[0])
                {
                    if (el === element.arr[4] || el === element.arr[2]) {
                        return true;
                    }
                }
            }
            )
            
            const secondTwoPair = element.arr.every(el => {if(el != element.arr[4])
                {
                    if (el === element.arr[0] || el === element.arr[2]) {
                        return true;
                    }
                }
              }
            )

            let onePair;
            for (let i = 0; i < element.arr.length; i++) {
                for (let k = i + 1; k < element.arr.length; k++) {
                    if(element.arr[i] === element.arr[k]){
                        return onePair = true
                    }
                }
            }
//Royal Flush 
            // https://javascript.plainenglish.io/6-tips-to-improve-your-conditional-statements-for-better-readability-56256c5a5245
            if (sameSuits && areConsecutive && royalFlush) 
            {
            element.hand = handOptions[0];
            element.handNum = 0
            // console.log(`player ${element.name} has a ${element.hand}`);
            // return;
            }
//Straight Flush
            else if (sameSuits 
            && areConsecutive) 
            {
            element.hand = handOptions[1];
            element.handNum = 1
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Four of a Kind
            //Check that middle value is equal to (one on left && 2 on right) OR (1 on right && 2 on left)
            else if (firstFourOfAKind
            || secondFourOfAKind) 
            {
            element.hand = handOptions[2];
            element.handNum = 2
        
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Full House
            //Check that middle value is equal to (2 on left) OR (2 on right) 
            else if ((firstFullHouse
            && (element.arr[0] === element.arr[1]))
            || (secondFullHouse
            && (element.arr[4] === element.arr[3]))
            || (thirdFullHouse 
            && (element.arr[4] === element.arr[0])) )
            {
            element.hand = handOptions[3];
            element.handNum = 3
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Flush
            else if (sameSuits) 
            {
            element.hand = handOptions[4];
            element.handNum = 4
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Straight
            else if (!sameSuits 
            && areConsecutive) 
            {
            element.hand = handOptions[5];
            element.handNum = 5
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Three-of-a-Kind
            else if (firstFullHouse
            || secondFullHouse 
            || thirdFullHouse) 
            {
            element.hand = handOptions[6];
            element.handNum = 6
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//Two Pair

            else if (firstTwoPair || secondTwoPair) 
            {
            element.hand = handOptions[7];
            element.handNum = 7
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//One Pair
            else if (onePair) 
            {
            element.hand = handOptions[8];
            element.handNum = 8
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
//High Card
            else
            {
            element.hand = handOptions[9];
            element.handNum = 9
            // console.log(`player ${element.name} has a ${element.hand}`);
            //return;
            }
        }
    )
    startRound.innerHTML = 'Reveal Winner'
    activateButton(startRound, revealWinner);

}

const revealWinner = () => {
    remainingPlayers.sort(function (a, b) {
        a.handNum - b.handNum;
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
    
    startRound.innerHTML = 'End Round'
    activateButton(startRound, finishRound)
}

const finishRound = () => {
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
    let showdownCards = document.querySelector('.showdownCards')
    showdownCards.remove()

    //Remove Winner Reveal from Display 

    //Live Node List: More than 1 script

    winnerReveal.remove();
    // removeDisplay(winnerReveal, ``)

    //Removing:
    //const ul = document.querySelector('ul')
    //const li = document.querySelector('li')
    //li.remove()
    startRound.innerHTML = 'Start Round'
        activateButton(startRound, beginRound)
}
      
const beginRound = () => {
    deactivateButton(startRound, beginRound)
    if(startRound.innerHTML === "Start Round") {
        generateDeck()

        startRound.innerHTML = "Deal cards to players";
        activateButton(startRound, beginRound)
    }

    else if (startRound.innerHTML === "Deal cards to players") {
        firstDeal()

        players[4].cards.forEach(element => { 
            let thisCard = document.createElement('div')
            thisCard.classList.add('card')

            thisCard.innerHTML = `${element.value}<br>${element.suit}`
            myCards.appendChild(thisCard)
        })

        startRound.innerHTML = 'Deal Community Cards'
        activateButton(startRound, beginRound)
    }

    else if (startRound.innerHTML === 'Deal Community Cards') {
        //Call Functions 
        dealCard(communityChosen)
        dealCard(communityChosen)
        dealCard(communityChosen)

        //Add Community Cards to Display
        communityChosen.forEach(element => {
            let thisCard = document.createElement('div')

            thisCard.classList.add('card')

            thisCard.innerHTML = `${element.value}<br>${element.suit}`
            communityCards.appendChild(thisCard)
        })

        startRound.innerHTML = `Start Betting`;
        activateButton(startRound, startBetting)
    }

    //!!While generating deck, play animation of a deck forming, make sure it takes an amount of time 
    
}

//Actual running JavaScript
activateButton(startRound, beginRound)
