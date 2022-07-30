// let roundState = "end";

//#1 Capture DOM Elements
let startRound = document.querySelector("#start-round");
let comBox = document.querySelector('.community-box')
let betButtons = document.querySelectorAll('.betting-buttons')

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

//#3.2 Display all players' names

for (let i = 1; i < 7; i++) {
  let playerSpot = document.getElementById(`player-${i}`);
  let finalName = document.createElement('p')
  let p = i - 1;
  finalName.innerHTML = players[p].name;
  playerSpot.appendChild(finalName);
}

//#3.3 Button-trigger functions #1 Start Round #2 Deal Cards to Players #3 Deal Community Cards #4 Start Betting #5 Make Choice #6 Showdown #7 Reveal Winner #8 End Round
generateDeck = () => {
    
  //Set Timeout begins 
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
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let card = { value: values[x], suit: suits[i] };
      deck.push(card);
    }
  }
   //Set Timeout ends

}


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
//3.2 Function to Actually Deal Cards
// playDeal.addEventListener("click", 
firstDeal = () => {
  deactivateButton(playDeal)
  players.forEach((element) => dealCard(element));
  players.forEach((element) => dealCard(element));
  // let displayCards = players.find(
  //   (element) => element.name === "Angeline"
  // );
  cards.innerHTML = `${players[4].cards[0].value}${players[4].cards[0].suit}`;
  cards2.innerHTML = `${players[4].cards[1].value}${players[4].cards[1].suit}`;
}

 //Variables
 let communityCards = [];
 let cardGiven;

 //Functions
   function randomCard() {
     cardGiven = Math.floor(Math.random() * deck.length);
     communityCards.push(deck[cardGiven]);
     deck.splice(cardGiven, 1);
   }

startBetting = () => {
   let betChoice = ["check", "fold", "call the big blind", "raise"];

   players[0].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[0].bet);
   let firstChoice = document.querySelector("#player-1 .bet-choice");
   firstChoice.innerHTML = `${players[0].bet}`;

   players[1].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[1].bet);
   let secondChoice = document.querySelector("#player-2 .bet-choice");
   secondChoice.innerHTML = `${players[1].bet}`;

   players[2].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[2].bet);
   let thirdChoice = document.querySelector("#player-3 .bet-choice");
   thirdChoice.innerHTML = `${players[2].bet}`;

   players[3].bet =
     betChoice[Math.floor(Math.random() * betChoice.length)];
   console.log(players[3].bet);
   let fourthChoice = document.querySelector("#player-4 .bet-choice");
   fourthChoice.innerHTML = `${players[3].bet}`;
  }

  makeChoice = (e) => {
  
    betButtons.forEach((element) => {
      deactivateButton(element)
    })

    players[4].bet = e.target.innerHTML;
    let myChoice = document.querySelector("#player-5 .bet-choice");
    myChoice.innerHTML = `${players[4].bet}`;
    console.log(players[4].bet);

    
   
    players[5].bet =
      betChoice[Math.floor(Math.random() * betChoice.length)];

    console.log(players[5].bet);
    let sixthChoice = document.querySelector("#player-6 .bet-choice");
    sixthChoice.innerHTML = `${players[5].bet}`;


  }

  showdown = () => {
    let remainingPlayers = [];

    players.forEach((element) => {
      if (element.bet !== "fold") {
        remainingPlayers.push(element);
      }
    });
    players.forEach((element) => {
      if (element.bet !== "fold") {
        console.log(`${element.name} remains`);
      }
    });

    //Making the hands of each remaining player
    remainingPlayers.forEach((element) => {
      if (element.name != players[4].name) {

        let playerName = document.createElement('p')

        let beforeHands = document.createElement('div')
        comBox.appendChild(beforeHands)
        beforeHands.classList.add('showdownHands');
        beforeHands.style.display = 'flex'
        beforeHands.style.flexDirection = 'column'

        beforeHands.style.justifyContent = 'center'

        beforeHands.style.width = '400px'
        beforeHands.style.height = '100%'
        beforeHands.style.padding = '0 10px 0 10px'
        beforeHands.style.backgroundColor = 'lightgrey'
        beforeHands.style.borderRadius = '5px'

        playerName.innerHTML = `${element.name}`
        beforeHands.appendChild(playerName);

        let showHands = document.createElement('div')
        beforeHands.appendChild(showHands);

        let showHands1 = document.createElement('div')
        showHands1.classList.add('card', 'mine')

        showHands1.innerHTML = `${element.cards[0].value}${element.cards[0].suit}`


        showHands.appendChild(showHands1)

        let showHands2 = document.createElement('div')
        showHands2.classList.add('card', 'mine')
        showHands2.innerHTML = `${element.cards[1].value}${element.cards[1].suit}`

        showHands.appendChild(showHands2);

        showHands.style.display = 'flex';

        showHands.style.height = '400px';
      }

    })
    remainingPlayers.forEach((element) => {
      element.hand = [];
      element.handNum;
      element.hand.push(...element.cards);
      element.hand.push(...communityCards);
      element.arr = [];
      console.log(
        `${element.name} has a hand of ${element.hand[0].value}${element.hand[0].suit}${element.hand[1].value}${element.hand[1].suit}${element.hand[2].value}${element.hand[2].suit}${element.hand[3].value}${element.hand[3].suit}${element.hand[4].value}${element.hand[4].suit}`
      );
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

        // CHeck if is a royal flush and return early if it is ... 
        // https://javascript.plainenglish.io/6-tips-to-improve-your-conditional-statements-for-better-readability-56256c5a5245
        if (
          element.hand.every((element) => element.suit === suitOfficial) &&
          element.hand.find((element) => element.value === 1) &&
          element.hand.find((element) => element.value === 13) &&
          element.hand.find((element) => element.value === 12) &&
          element.hand.find((element) => element.value === 11) &&
          element.hand.find((element) => element.value === 10)
        ) {
          element.hand = `Royal Flush`;
          element.handNum = 1;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (
          element.hand.every((element) => element.suit === suitOfficial) &&
          areConsecutive
        ) {
          element.hand = `Straight Flush`;
          element.handNum = 2;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        //Check that middle value is equal to (one on left && 2 on right) OR (1 on right && 2 on left)
        else if (
          ((element.arr[2] === element.arr[1]) && (element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[4]))
          || ((element.arr[2] === element.arr[1]) && (element.arr[2] === element.arr[0]) && (element.arr[2] === element.arr[3]))
        ) {
          element.hand = `Four-of-a-Kind`;
          element.handNum = 3;
          console.log(element.arr)
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }
        //Check that middle value is equal to (2 on left) OR (2 on right) 
        else if (
          ((element.arr[2] === element.arr[1]) && (element.arr[2] === element.arr[0]) && (element.arr[3] === element.arr[4]))
          || ((element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[4]) && (element.arr[0] === element.arr[1]))
        ) {
          element.hand = `Full House`;
          element.handNum = 4;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (element.hand.every(element => element.suit === suitOfficial)) {
          element.hand = `Flush`;
          element.handNum = 5;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (
          !element.hand.every((element) => element.suit === suitOfficial) &&
          areConsecutive
        ) {
          element.hand = `Straight`;
          element.handNum = 6;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (
          ((element.arr[2] === element.arr[1]) && (element.arr[2] === element.arr[0]) && !(element.arr[3] === element.arr[4]))
          || ((element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[4]) && !(element.arr[0] === element.arr[1])) || ((element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[1]) && !(element.arr[0] === element.arr[4]))
        ) {
          element.hand = `Three-of-a-Kind`;
          element.handNum = 7;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (
          ((element.arr[0] == element.arr[1]) && (element.arr[2] === element.arr[3]))
          || ((element.arr[4] === element.arr[3]) && (element.arr[2] === element.arr[1]) || ((element.arr[0] === element.arr[1]) && (element.arr[3] === element.arr[4])))) {
          element.hand = `Two-Pair`;
          element.handNum = 8;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }
        else if (
          ((element.arr[0] === element.arr[1]) || (element.arr[1] === element.arr[2]) || (element.arr[2] === element.arr[3]) || (element.arr[3] === element.arr[4]))) {
          element.hand = `One-Pair`;
          element.handNum = 9;
          console.log(`player ${element.name} has a ${element.hand}`);
          return;
        }

        else if (!((element.arr[0] === element.arr[1]) || (element.arr[1] === element.arr[2]) || (element.arr[2] === element.arr[3]) || (element.arr[3] === element.arr[4]))) {
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
        console.log(`The winner is ${winner} with a ${winningHand}!`)
        winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
      }
      else {
        winner = "tied";
        console.log(`The winner is ${winner} with a ${winningHand}!`)
        winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
      }

     
    }
     

finishRound = () => {
  deactivateButton(startRound)

    players.forEach((element) => {
      element.cards = [];
      element.chips = 0;
      element.bet = "";
      element.hand = [];
      console.log(players);
     });

  let choiceDisplays = document.getElementsByClassName('bet-choice')
    for (let i = 0; i < choiceDisplays.length; i++) {
        choiceDisplays[i].innerText = `No bet`;
    } //SUCCESSFULLY replaces all bet choices
      
  let cardDisplays = document.getElementsByClassName('card')
    for (let i = 0; i < cardDisplays.length; i++) {
      cardDisplays[i].innerText = ``;
    } //SUCCESSFULLY deletes all contents on Player Cards && Community Cards

  let beforeHands = document.getElementsByClassName('showdownHands')
    for (let i = 0; i < beforeHands.length; i++) {
      beforeHands[i].innerHTML = ``;
      beforeHands[i].style.backgroundColor = ``;
    } //SUCCESSFULLY removes showdown hands from center of table
      
  winnerReveal.innerHTML = ``;

      
    }

//Final Function: To be triggered on End Round --> After Winner has been displayed

// let buttons = document.getElementsByClassName('function-buttons')

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', )
// }

// for(let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener
// }
// Captured DOM elements 

// let startBetting = document.getElementById("start-betting");
// let reveal = document.getElementById("reveal");
// let winnerReveal = document.querySelector("#winner-reveal");
// let cards = document.getElementById("cards");
// let cards2 = document.getElementById("cards2");
// let endRound = document.querySelector("#end-round");

//Use disabled attributes, disable them and then reenable

//Add currently relevant event listener at a given time

// Variables for tracking state


// if (roundState === "end") {

  activateButton(startRound)

startRound.addEventListener('click', beginRound)
      
     beginRound = () => {

      if(startRound.innerHTML === "Start Round") {
        deactivateButton(startRound)
        generateDeck()
        startRound.innerHTML = "Deal cards to players";
        activateButton(startRound)
      // roundState = "ongoing";
      
      //#1 Generate Deck
     
      // let playDeal = document.getElementById("deal-players");
      // let showdown = document.getElementById("showdown");
      // let comDeal = document.getElementById("deal-community");

    }

    else if (startRound.innerHTML === "Deal cards to players") {
      deactivateButton(startRound)
      firstDeal()
      startRound.innerHTML = 'Deal Community Cards'
      activateButton(startRound)
    }

    else if (startRound.innerHTML === 'Deal Community Cards') {
      deactivateButton(startRound)

     
      //Call Functions 
        randomCard()
        randomCard()
        randomCard()

      console.log(`here are the ${communityCards}`);

      //Add Community Cards to Display
      let addBox = document.querySelector('.community-cards')
      for(let i = 0; i < communityCards.length; i++) {
        let thisCard = document.createElement('div')
        thisCard.classList.add('community')
        thisCard.classList.add('card')

        thisCard.innerHTML = `${communityCards[i].value}${communityCards[i].suit}`
        addBox.appendChild(thisCard)
      }
      
      startRound.innerHTML = `Start Betting`;
      activateButton(startRound)

    }

        // let cardGiven = Math.floor(Math.random() * deck.length);
        // communityCards.push(deck[cardGiven]);
        // deck.splice(cardGiven, 1);
        // // console.log(communityCards);
        // // console.log(deck.length);

        // cardGiven = Math.floor(Math.random() * deck.length);
        // communityCards.push(deck[cardGiven]);
        // deck.splice(cardGiven, 1);
        // // console.log(communityCards);
        // // console.log(deck.length);

        // cardGiven = Math.floor(Math.random() * deck.length);
        // communityCards.push(deck[cardGiven]);
        // deck.splice(cardGiven, 1);
 
        // console.log(deck.length);

        // let comCards = document.querySelector("#com-cards");
        // comCards.innerHTML = `${communityCards[0].value}${communityCards[0].suit}`;
        // let comCards2 = document.querySelector("#com-cards2");
        // comCards2.innerHTML = `${communityCards[1].value}${communityCards[1].suit}`;
        // let comCards3 = document.querySelector("#com-cards3");
        // comCards3.innerHTML = `${communityCards[2].value}${communityCards[2].suit}`;
      
 
        // let myCards = document.createElement("div");
        // let me = players.find((element) => element.name === "Angeline");
        //Create CSS Display of cards with the Suits and Values
        // me.cards.forEach(
        //   (element) => (myCards.innerHTML = `${element.suit} ${element.value}`)
        // );
        // myCards.style.color = "red";
        // document.body.appendChild(myCards);

        // 1. Figure out how to print card
        // 2. Run and test and debug everything existing

        //Display those cards to Angeline
        //Add Cards to bottom of Angeline's screen when they are dealt to her
        //Occurs each round
        //Additional cards added each time cards are dealt

       
  


    

        // console.log(deck);

        // activateButton(playDeal)
        

//!!While generating deck, play animation of a deck forming, make sure it takes an amount of time 

        // return deck;


     else if(startRound.innerHTML = 'Start Betting') {
      deactivateButton(startRound)
startBetting();

//1.Add a class to all betting buttons
//2.Target betting buttons through the 1 class
//3.e.target to get the value of the button pressed
      // let check = document.getElementById("check");
      // let fold = document.getElementById("fold");
      // let raise = document.getElementById("raise");
      // let call = document.getElementById("call");

  betButtons.forEach((element) => {
    activateButton(element)
  })
 
      let myChoice = document.querySelector("#player-5 .bet-choice");
      myChoice.innerHTML = `My turn`;
     
     
      betButtons.forEach((btn) => {
        btn.addEventListener('click', makeChoice)
      })

      console.log(
        "All Bets have been made, time to kick out those who folded, have the showndown, and reveal the winner."
      );

      startRound.innerHTML = 'Showdown';
      activateButton(startRound)

     }
     

      
else if (startRound.innerHTML = 'Showdown') {
  deactivateButton(showdown)
  showdown();
  startRound.innerHTML = 'Reveal Winner'
          activateButton(startRound);
}


        //Comparing the hands of each remaining player


        //Test for Royal Flush = Works
        // remainingPlayers[1].hand[1].value = 1;
        // remainingPlayers[1].hand[2].value = 13;
        // remainingPlayers[1].hand[3].value = 11;
        // remainingPlayers[1].hand[4].value = 12;
        // remainingPlayers[1].hand[0].value = 10;

        // remainingPlayers[1].hand[1].suit = "diamonds";
        // remainingPlayers[1].hand[2].suit = "diamonds";
        // remainingPlayers[1].hand[3].suit = "diamonds";
        // remainingPlayers[1].hand[4].suit = "diamonds";
        // remainingPlayers[1].hand[0].suit = "diamonds";

        // Test for Straight Flush = works
        // remainingPlayers[1].hand[1].value = 1;
        // remainingPlayers[1].hand[2].value = 2;
        // remainingPlayers[1].hand[3].value = 3;
        // remainingPlayers[1].hand[4].value = 4;
        // remainingPlayers[1].hand[0].value = 5;

        // remainingPlayers[1].hand[1].suit = "diamonds";
        // remainingPlayers[1].hand[2].suit = "diamonds";
        // remainingPlayers[1].hand[3].suit = "diamonds";
        // remainingPlayers[1].hand[4].suit = "diamonds";
        // remainingPlayers[1].hand[0].suit = "diamonds";

        // console.log(remainingPlayers[1]);

        // Test for Four-of-a-Kind = Works
        // remainingPlayers[1].hand[1].value = 1;
        // remainingPlayers[1].hand[2].value = 5;
        // remainingPlayers[1].hand[3].value = 1;
        // remainingPlayers[1].hand[4].value = 1;
        // remainingPlayers[1].hand[0].value = 1;

        // console.log(remainingPlayers[1]);

        // Test for Full House = Works
        // remainingPlayers[1].hand[1].value = 1;
        // remainingPlayers[1].hand[2].value = 5;
        // remainingPlayers[1].hand[3].value = 1;
        // remainingPlayers[1].hand[4].value = 1;
        // remainingPlayers[1].hand[0].value = 5;

        // console.log(remainingPlayers[1]);

        // Test for Flush = Works
        // remainingPlayers[1].hand[1].suit = "diamonds";
        // remainingPlayers[1].hand[2].suit = "diamonds";
        // remainingPlayers[1].hand[3].suit = "diamonds";
        // remainingPlayers[1].hand[4].suit = "diamonds";
        // remainingPlayers[1].hand[0].suit = "diamonds";

        // console.log(remainingPlayers[1]);

        // Test for Straight = Works
        // remainingPlayers[1].hand[1].value = 1;
        // remainingPlayers[1].hand[2].value = 2;
        // remainingPlayers[1].hand[3].value = 5;
        // remainingPlayers[1].hand[4].value = 4;
        // remainingPlayers[1].hand[0].value = 3;

        // console.log(remainingPlayers[1]);

        // Test for Three-of-a-Kind = Works
        // remainingPlayers[1].hand[1].value = 6;
        // remainingPlayers[1].hand[2].value = 2;
        // remainingPlayers[1].hand[3].value = 1;
        // remainingPlayers[1].hand[4].value = 2;
        // remainingPlayers[1].hand[0].value = 2;

        // console.log(remainingPlayers[1]);

        // Test for Two-Pair = Works
        // remainingPlayers[1].hand[1].value = 6;
        // remainingPlayers[1].hand[2].value = 1;
        // remainingPlayers[1].hand[3].value = 1;
        // remainingPlayers[1].hand[4].value = 2;
        // remainingPlayers[1].hand[0].value = 6;

        // console.log(remainingPlayers[1]);

        // Test for One-Pair = Works
        // remainingPlayers[1].hand[1].value = 2;
        // remainingPlayers[1].hand[2].value = 1;
        // remainingPlayers[1].hand[3].value = 1;
        // remainingPlayers[1].hand[4].value = 6;
        // remainingPlayers[1].hand[0].value = 7;

        // console.log(remainingPlayers[1]);

        // Test for High Card
        // remainingPlayers[1].hand[1].value = 3;
        // remainingPlayers[1].hand[2].value = 1;
        // remainingPlayers[1].hand[3].value = 2;
        // remainingPlayers[1].hand[4].value = 6;
        // remainingPlayers[1].hand[0].value = 7;

        // remainingPlayers[1].hand[1].suit = "diamonds";
        // remainingPlayers[1].hand[2].suit = "clubs";
        // remainingPlayers[1].hand[3].suit = "spades";
        // remainingPlayers[1].hand[4].suit = "hearts";
        // remainingPlayers[1].hand[0].suit = "diamonds";

        // console.log(remainingPlayers[1]);

       
 
    
          
          // console.log("Round done!");
          // console.log(remainingPlayers[1]);


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
          
        


// }



//1. At end of showdown Evals: Create a new HTML Element for each card that each player has who is remaining
//Reveal everyone's cards: 1. Print name & cards underneath: Exactly the same way as MY CARDS, just in a row beneath my cards

//Winner revealed later=

//End of CSS

// 2. ADD CHIP NUMBERS


//3. ADD 3 Rounds as game intends

//4. Refactor Code

// 5. DONE


//What is properity learning? Refactoring, using all concepts? CSS, animations,

//1. Semantic HTML 2. CSS 3. Functional JS

//1. Refactoring 2. Docuemnting the read.md epxlaining waht you ddi and why you decied to use Classes, or what you used, chocies you made and

//1. Documentation

//

//--> Just what you think is best for a first project, what is most improtnat, and stuff that is best to get right