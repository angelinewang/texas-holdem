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
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ];
      let deck = [];
      let playDeal = document.getElementById("deal-players");
      let showndown = document.getElementById("showdown");
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
      firstDeal = () => {
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
      };
      playDeal.addEventListener("click", firstDeal);

      let communityCards = [];

      communityDeal = () => {
        comDeal.style.backgroundColor = "white";
        comDeal.style.color = "black";

        firstComDeal = () => {
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
        };

        firstComDeal();

        startBetting.style.backgroundColor = "green";
        startBetting.style.color = "white";
      };

      comDeal.addEventListener("click", communityDeal);

      firstBet = () => {
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

          showdown.style.backgroundColor = "green";
          showdown.style.color = "white";
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
      };

      startBetting.addEventListener("click", firstBet);

      showdownFunction = () => {
        showdown.style.backgroundColor = "white";
        showdown.style.color = "black";

        let remainingPlayers = [];
        //Final Step: Showndown 1. Create array with remaining players 2. Compare the hands of each player 3. Declare winner
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
          element.hand.push(...element.cards);
          element.hand.push(...communityCards);

          console.log(
            `${element.name} has a hand of ${element.hand[0].value}${element.hand[0].suit}${element.hand[1].value}${element.hand[1].suit}${element.hand[2].value}${element.hand[2].suit}${element.hand[3].value}${element.hand[3].suit}${element.hand[4].value}${element.hand[4].suit}`
          );
        });

        //Comparing the hands of each remaining player

        console.log(remainingPlayers);

        remainingPlayers.forEach((element) => {
          let suitOfficial = element.hand[0].suit;
          console.log(suitOfficial);
          if (
            element.hand.every((element) => element.suit === suitOfficial) &&
            element.hand.find((element) => element.value === "A") &&
            element.hand.find((element) => element.value === "K") &&
            element.hand.find((element) => element.value === "Q") &&
            element.hand.find((element) => element.value === "J") &&
            element.hand.find((element) => element.value === "10")
          ) {
            element.hand = `Royal Flush`;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
          }

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

          let arr = element.hand.map((element) => element.value);
          let differenceAry = arr.slice(1).map(function (n, i) {
            return n - arr[i];
          });
          let isConsecutive = differenceAry.every((value) => value == 1);
          console.log(isConsecutive);

          if (
            element.hand.every((element) => element.suit === suitOfficial) &&
            isConsecutive
          ) {
            element.hand = `Straight Flush`;
            console.log(`player ${element.name} has a ${element.hand}`);
            return;
          }
        });
        console.log("Round done!");
        // console.log(
        //   `The winner is ${winner} with a ${winningHand} ${winningChips}.`
        // );
        endRound.style.backgroundColor = "green";
        endRound.style.color = "white";
      };

      showdown.addEventListener("click", showdownFunction);

      finishRound = () => {
        endRound.style.backgroundColor = "white";
        endRound.style.color = "black";
        players.forEach((element) => {
          element.cards = [];
          element.chips = 0;
          element.bet = "";
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

        startRound.style.backgroundColor = "green";
        startRound.style.color = "white";
        startRound.addEventListener("click", beginRound);
      };
      endRound.addEventListener("click", finishRound);
    })
  );
}
