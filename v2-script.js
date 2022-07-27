let roundState = "end";

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

//Final Function: To be triggered on End Round --> After Winner has been displayed
let startRound = document.querySelector("#start-round");
let startBetting = document.getElementById("start-betting");

let reveal = document.getElementById("reveal");
let winnerReveal = document.querySelector("#winner-reveal");
let winner;
let winningHand;
let winnerTie;

let cards = document.getElementById("cards");
let cardsSuit = document.getElementById("cards-suit");
let cards2 = document.getElementById("cards2");
let cardsSuit2 = document.getElementById("cards-suit2");

let endRound = document.querySelector("#end-round");
if (roundState === "end") {
  startRound.style.backgroundColor = "green";
  startRound.style.color = "white";
  startRound.addEventListener(
    "click",
    (beginRound = () => {
      
      roundState = "ongoing";

      //#1 Generate Deck
      startRound.style.backgroundColor = "white";
      startRound.style.color = "black";
      
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
      let playDeal = document.getElementById("deal-players");
      let showdown = document.getElementById("showdown");
      let comDeal = document.getElementById("deal-community");

      function generateDeck() {
        for (let i = 0; i < suits.length; i++) {
          for (let x = 0; x < values.length; x++) {
            let card = { value: values[x], suit: suits[i] };
            deck.push(card);
          }
        }
        console.log(deck);
        
        playDeal.style.backgroundColor = "green";
        playDeal.style.color = "white";
        
        return deck;
        
      }

      generateDeck();
      
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
      playDeal.addEventListener("click", firstDeal = () => {
        playDeal.style.backgroundColor = "white";
        playDeal.style.color = "black";
        players.forEach((element) => dealCard(element));
        players.forEach((element) => dealCard(element));
        let displayCards = players.find(
          (element) => element.name === "Angeline"
        );
        cards.innerHTML = `${displayCards.cards[0].value}`;
        cardsSuit.innerHTML = `${displayCards.cards[0].suit}`;
        cards2.innerHTML = `${displayCards.cards[1].value}`;
        cardsSuit2.innerHTML = `${displayCards.cards[1].suit}`;

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

        comDeal.style.backgroundColor = "green";
        comDeal.style.color = "white";
        
      });


      let communityCards = [];
      comDeal.addEventListener("click", communityDeal = () => {
        comDeal.style.backgroundColor = "white";
        comDeal.style.color = "black";

          let cardGiven = Math.floor(Math.random() * deck.length);
          communityCards.push(deck[cardGiven]);
          deck.splice(cardGiven, 1);
          console.log(communityCards);
          console.log(deck.length);

          cardGiven = Math.floor(Math.random() * deck.length);
          communityCards.push(deck[cardGiven]);
          deck.splice(cardGiven, 1);
          console.log(communityCards);
          console.log(deck.length);

          cardGiven = Math.floor(Math.random() * deck.length);
          communityCards.push(deck[cardGiven]);
          deck.splice(cardGiven, 1);
          console.log(`here are the ${communityCards}`);
          console.log(deck.length);

          let comCards = document.querySelector("#com-cards");
          comCards.innerHTML = `${communityCards[0].value}`;
          let comCards2 = document.querySelector("#com-cards2");
          comCards2.innerHTML = `${communityCards[0].suit}`;
          let comCards3 = document.querySelector("#com-cards3");
          comCards3.innerHTML = `${communityCards[1].value}`;
          let comCards4 = document.querySelector("#com-cards4");
          comCards4.innerHTML = `${communityCards[1].suit}`;
          let comCards5 = document.querySelector("#com-cards5");
          comCards5.innerHTML = `${communityCards[2].value}`;
          let comCards6 = document.querySelector("#com-cards6");
          comCards6.innerHTML = `${communityCards[2].suit}`;
          startBetting.style.backgroundColor = "green";
          startBetting.style.color = "white";
        });
       
        startBetting.addEventListener("click", firstBet = () => {
        startBetting.style.backgroundColor = "white";
        startBetting.style.color = "black";
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

        let check = document.getElementById("check");
        let fold = document.getElementById("fold");
        let raise = document.getElementById("raise");
        let call = document.getElementById("call");
        check.style.backgroundColor = "green";
        check.style.color = "white";
        fold.style.backgroundColor = "green";
        fold.style.color = "white";
        call.style.backgroundColor = "green";
        call.style.color = "white";
        raise.style.backgroundColor = "green";
        raise.style.color = "white";

        makeChoice = (e) => {
          players[4].bet = e.target.innerHTML;
          let myChoice = document.querySelector("#player-5 .bet-choice");
          myChoice.innerHTML = `${players[4].bet}`;
          console.log(players[4].bet);
          check.style.backgroundColor = "white";
          check.style.color = "black";
          fold.style.backgroundColor = "white";
          fold.style.color = "black";
          call.style.backgroundColor = "white";
          call.style.color = "black";
          raise.style.backgroundColor = "white";
          raise.style.color = "black";

          
        };
        check.addEventListener("click", makeChoice);
        fold.addEventListener("click", makeChoice);
        raise.addEventListener("click", makeChoice);
        call.addEventListener("click", makeChoice);
        players[5].bet =
          betChoice[Math.floor(Math.random() * betChoice.length)];

        console.log(players[5].bet);
        let sixthChoice = document.querySelector("#player-6 .bet-choice");
        sixthChoice.innerHTML = `${players[5].bet}`;

        console.log(
          "All Bets have been made, time to kick out those who folded, have the showndown, and reveal the winner."
        );

        showdown.style.backgroundColor = "green";
          showdown.style.color = "white";
        
      });

      showdown.addEventListener("click",

      showdownFunction = () => {
        showdown.style.backgroundColor = "white";
        showdown.style.color = "black";

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
          element.hand = [];
          element.handNum;
          element.hand.push(...element.cards);
          element.hand.push(...communityCards);
          element.arr = [];
          console.log(
            `${element.name} has a hand of ${element.hand[0].value}${element.hand[0].suit}${element.hand[1].value}${element.hand[1].suit}${element.hand[2].value}${element.hand[2].suit}${element.hand[3].value}${element.hand[3].suit}${element.hand[4].value}${element.hand[4].suit}`
          );
        });

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
          
          const differenceAry = element.arr.slice(1).map(function(n, i) { return n - element.arr[i]; })
          const areConsecutive =  differenceAry.every(value => value == 1)
          console.log(areConsecutive)
         
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
            || ((element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[4]) && !(element.arr[0] === element.arr[1]))|| ((element.arr[2] === element.arr[3]) && (element.arr[2] === element.arr[1]) && !(element.arr[0] === element.arr[4]))
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
            ((element.arr[0] === element.arr[1]) || (element.arr[1] === element.arr[2]) || (element.arr[2] === element.arr[3]) || (element.arr[3] === element.arr[4])))
            {
            element.hand = `One-Pair`;
            element.handNum = 9;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
          }

          else if (!((element.arr[0] === element.arr[1]) || (element.arr[1] === element.arr[2]) || (element.arr[2] === element.arr[3]) || (element.arr[3] === element.arr[4]))){
            element.hand = `High Card`;
            element.handNum = 10;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
          }
        });
        console.log("Round done!");
        console.log(remainingPlayers[1]);

        
      reveal.style.backgroundColor = "green";
      reveal.style.color = "white";
      reveal.addEventListener("click", revealWinner = () => {
        reveal.style.backgroundColor = "white";
        reveal.style.color = "black";
        
        remainingPlayers.sort(function(a,b) {
        return a.handNum - b.handNum;
        });
        
        winningHand = remainingPlayers[0].hand;
        if (remainingPlayers[0].handNum != remainingPlayers[1].handNum && remainingPlayers[0].handNum != remainingPlayers[2].handNum && remainingPlayers[0].handNum != remainingPlayers[3].handNum && remainingPlayers[0].handNum != remainingPlayers[4].handNum && remainingPlayers[0].handNum != remainingPlayers[5].handNum)
        {
          winner = remainingPlayers[0].name;  
          console.log(`The winner is ${winner} with a ${winningHand}!`)
          winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
        }
  else {
    winner = "tied";
    console.log(`The winner is ${winner} with a ${winningHand}!`)
    winnerReveal.innerHTML = `The winner is ${winner} with a ${winningHand}!`
  }
  endRound.style.backgroundColor = "green";
  endRound.style.color = "white";
}
      
)
      });
      

    endRound.addEventListener("click", finishRound = () => {
        endRound.style.backgroundColor = "white";
        endRound.style.color = "black";
        players.forEach((element) => {
          element.cards = [];
          element.chips = 0;
          element.bet = "";
          element.hand = [];
          console.log(players);
        });
        let comCards = document.querySelector("#com-cards");
        comCards.innerHTML = ``;
        let comCards2 = document.querySelector("#com-cards2");
        comCards2.innerHTML = ``;
        let comCards3 = document.querySelector("#com-cards3");
        comCards3.innerHTML = ``;
        let comCards4 = document.querySelector("#com-cards4");
        comCards4.innerHTML = ``;
        let comCards5 = document.querySelector("#com-cards5");
        comCards5.innerHTML = ``;
        let comCards6 = document.querySelector("#com-cards6");
        comCards6.innerHTML = ``;

        let myChoice = document.querySelector("#player-5 .bet-choice");
        myChoice.innerHTML = ``;
        let firstChoice = document.querySelector("#player-1 .bet-choice");
        firstChoice.innerHTML = ``;
        let secondChoice = document.querySelector("#player-2 .bet-choice");
        secondChoice.innerHTML = ``;
        let thirdChoice = document.querySelector("#player-3 .bet-choice");
        thirdChoice.innerHTML = ``;
        let fourthChoice = document.querySelector("#player-4 .bet-choice");
        fourthChoice.innerHTML = ``;
        let sixthChoice = document.querySelector("#player-6 .bet-choice");
        sixthChoice.innerHTML = ``;

        cards.innerHTML = ``;
        cardsSuit.innerHTML = ``;
        cards2.innerHTML = ``;
        cardsSuit2.innerHTML = ``;
        winnerReveal.innerHTML = ``;

        startRound.style.backgroundColor = "green";
        startRound.style.color = "white";
        startRound.addEventListener("click", beginRound);
      })
    })
  );
}
