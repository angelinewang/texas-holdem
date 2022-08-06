# Texas Hold'em Poker Game 

## Part 1 Description

This was completed between July 23rd - Aug 6th 2022 as a part of the 1st General Assembly SEI Project where we were tasked to create a game. Technologies used include HTML, CSS and JavaScript. 

## Part 2 Deployment link

This project can be found on my person Github at: https://angelinewang.github.io/texas-holdem/

## Part 3 Getting Started/Code Installation

The code can be accessed by forking this public repository into your remote Github repository, cloning it into your local repository, and then opening the folder up in a text editor.

## Part 4 Timeframe & Working Team

We were given 2 weeks to complete this project independently. 

## Part 5 Technologies Used
#### Front-end
- HTML 
- CSS
- JavaScript

## Part 6 Brief
---
    #### ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

    ##### Overview

    Let's start out with something fun - **a game!**

    Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with Whack-A-Mole, it's up to you to come up with a fun and interesting game to build.

    **You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


    ---

    ##### Technical Requirements

    Your app must:

    * **Render a game in the browser**
    * **Design logic for winning** & **visually display which player won**
    * **Include separate HTML / CSS / JavaScript files**
    * Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
    * Use **Javascript** for **DOM manipulation**
    * **Deploy your game online**, where the rest of the world can access it
    * Use **semantic markup** for HTML and CSS (adhere to best practices)

    ---

    ##### Necessary Deliverables

    * A **working game, built by you**, hosted somewhere on the internet
    * A **link to your hosted working game** in the URL section of your Github repo
    * A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
    * **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

    ---

    ##### Suggested Ways to Get Started

    * **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
    * **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
    * Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
    * **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
    * **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
    * **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

    ---

    ##### Useful Resources

    * **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
    * **[Github Pages](https://pages.github.com)** _(for hosting your game)_


    ## Part 7 Planning

    To plan this project, I used [Shortcut](https://app.shortcut.com/) and divided the tasks into HTML, CSS, and JavaScript. First setting up some basic HTML, and then going into the game logic, before finally applying some CSS, which is based off of a model image located at ./Final CSS.jpg

    The UI was mostly determined on the fly and by the model image, so there were no wireframes for the UI. 

    Pseudocode was also applied in the JavaScript in order to section out the different parts of the game before it was removed upon completion of code. 

---

## Part 8 Build/Code Process

Here were the 3 key stages of development:

1. Setting up the game layout in HTML and CSS

Here is an HTML code snippet:

    <div id="player-0" class="user">
        <i class="fa-solid fa-user-ninja fa-3x"></i>
        <p class="small-blind">The Small Blind</p>
        <p class="bet-choice">No bet</p>
    </div>

Here is a CSS code snippet:

    .community-cards, .my-cards {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        color: black;
        font-weight: 400;
        height: 100%;
        min-width: 400px;
        max-width: 700px;
    }

--> How did I do it?
I used to font-awesome icons to import ninjas to represent users. To do this, I needed to add a folder of font-awesome assets into my repository. This folder was rather large, and I would have liked to figure out a way to only add what was absolutely necessary, as I am sure adding one ninja icon, this is overkill. 

I also used CSS Flexbox in order to position the top box of buttons, the table with the players and community cards, and the user's own card box. These elements were stacked on top of each other and made into their own Flexbox containers which could populate content horizontally. 

--> Why did I do it like this?
I have not yet experimented with other icon libraries, so I could not efficiently determine the best way to do this. Thus, this was more of a random decision. 

I used Flexbox as this is what I've become most familiar with through practice with Flexbox Froggy and Flexbox Zombies. I would like to experiment more with CSS Grid next time as I gain more experience with it.  


2. Creating a button that could be activated and deactivated when relevant 

Here is a code snippet:

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

--> How did I do it?
I created separated functions to activate and deactivate buttons, which changed the color of the button and also called the relevant function. To do this, I passed the button name and function as arguments in the code. 

At first, I had created a separate button for each function, but I figured it would be most efficiently and optimal for UI design to use a single button whose functionality would change throughout the game. This required changing the innerHTML of the button as relevant as well. 

--> Why did I do it like this?
I hoped to create the most clean UI I could and also make the UI less confusing by only displaying buttons when they were relevant. This also prevented the previously occurring problem of accidentally clicking and triggering of functions at the wrong stage of the game. 

3. Allowing the button to initiate the appropriate logic at each stage of the game

Here is a code snippet from deck generation:

const generateDeck = () => {
  suits.forEach(element => {
    let cardSuit = element;
    values.forEach(element => {
        let card = { value: element, suit: cardSuit };
        deck.push(card);
    })
  })
}

Here is a code snippet from evaluating if a hand is a Four-of-a-Kind:

    remainingPlayers.forEach((element) => {
        //Element properties could be better named here
        element.first4 = element.arr.map(element => element)
        element.first4.shift()
        element.firstFourOfAKind = element.first4.every((el) => el === element.arr[2])

        element.second4 = element.arr.map(element => element)
        element.second4.pop()
        element.secondFourOfAKind = element.second4.every(el => el === element.arr[2])

... 

    else if (element.firstFourOfAKind || element.secondFourOfAKind) {
        element.hand = handOptions[2];
        element.handNum = 2;
        }
    })

--> How did I do it?
This also meant I needed to make functions tighter in order to trigger them separately as the game went on, rather than having everything under the beginGame function. 

I also needed to test out each button and its functionality in chronological order to ensure the game flows smoothly and as expected. 

Different stages of the game meant different logic, for example, the showdownFunction() requiring a lot of conditional statements, while the generateDeck() logic required nested forEachs. Using the appropriate methods at each touch point was key. 

--> Why did I do it like this?
I tested the functions in chronological order so that I could ensure dependencies were dealt with. This means that many of the later functions depended on data gathered from earlier functions, and would not make sense if run in isolation of earlier functions. 

This chronological process also allowed me to identify gaps in logic I could not predict. For example, the need to create a new array of players who had not folded, before evaluating each player's hand. 


## Part 9 Challenges

Here are a technical challenge I faced:

Removing cards from the table and player's display once the round was ended 
--> Why was it a challenge? 
This was a challenge at first since the cards were assigned different classes and ids, so it meant I needed to remove player cards and cards on the table separately. Furthermore, I did not know of the existence of a /remove() method, so I was attempting to remove the displays by making the innerHTML empty. But this resulted in a problem when the game was re-started, as the old empty elements still took up space on the UI. 

--> How did I problem solve?
Upon restarting the game, I realised that removing the innerHTML was not sufficient, and that the elements needed to be removed as a whole, because a new run of the game would recreate them anyways. I googled and found the remove method. 

--> How was it resolved?
To remove the cards more efficiently, I added the "card" class to all card displays created. This way, I could simply get all the elements with the class card and remove them one by one with a forEach method. 

Here is the code I wrote:

    const finishRound = () => {
        let cardDisplays = document.querySelectorAll('.card')
        cardDisplays.forEach(element => element.remove())
    }

--> What tools did I used?
I consulted MDN Docs, Stack Overflow, and also confirmed the knowledge I found with my General Assembly instructor, who agreed it was correct to use the remove method. 

## Part 10 Wins

Here are 3 interesting problems I solved:

1. Adding cards into the middle of the table as they were dealt
--> This was at first difficult because I could not figure out how to expand the table as necessary in order to allow the space. 
--> I experimented with flex-grow, but in the end landed on hardcoding a section for the cards into the HTML. 
--> In the future, In would prefer for the boxes for community cards and showdown hands to only appear as necessary. 

Here's a section of code I used to display the Community cards:

    communityChosen.forEach(element => {
        let thisCard = document.createElement('div')

        thisCard.classList.add('card')

        thisCard.innerHTML = `${element.value}<br>${element.suit}`
        communityCards.appendChild(thisCard)
    })


Here's how I displayed the Showdown hands:

    //Determines players still remaining at time of showdown 
        players.forEach((element) => {
            if (element.bet !== "fold") {
            remainingPlayers.push(element);
            }
        });

    //For remaining players, displays their name with their cards below
        remainingPlayers.forEach((element) => {
        if (element.name != players[4].name) {
                let playerName = document.createElement('p')
                playerName.innerHTML = `${element.name}`

                handsDes.appendChild(playerName);
                handsDes.style.width = `${handsBox.style.width}`
                
                let showdownCards = document.createElement('div')
                showdownCards.classList.add('showdown-cards')
                handsBox.appendChild(showdownCards)

                element.cards.forEach((element) => {
                    let thisCard = document.createElement('div')
                    thisCard.classList.add('card')
                    thisCard.innerHTML = `${element.value}<br>${element.suit}`

                    showdownCards.appendChild(thisCard)
                })
            }
        })

2. Evaluating players' hands
--> This was at first difficult because it was hard to accurately test if the logic was working 
--> I ended up writing some simple tests in the JS and console logging, but the rest of testing mostly came down to eying the results as I played the game multiple times through 
--> I experimented with multiple ways of writing the conditionals, but think that this could still be further optimised with more succinct logic 

Here's a section of code evaluating if the player has a Straight Flush:

    remainingPlayers.forEach((element) => {
        element.arr = element.hand.map((el) => el.value)
        element.arr.sort();

        element.differenceAry = element.arr.slice(1).map(function (n, i) { return n - element.arr[i]; })

        element.areConsecutive = element.differenceAry.every(value => value == 1)

        element.sameSuits = element.hand.every((el) => el.suit === element.hand[0].suit)

        else if (element.sameSuits && element.areConsecutive) 
        {
            element.hand = handOptions[1];
            element.handNum = 1;
        }
    })

3. Adding appearing/disappearing buttons only necessary during betting
--> This was at first difficult because I did not know how to remove buttons from the page 
--> I also faced a problem with the buttons I intended to remove, reappearing later in the game: I did not figure out why this issue was happening, but I did resolve it by moving some code around 

Here's some code I wrote to create betting buttons, handle a click, and remove them:

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
        players[4].bet = e.target.innerHTML;
        let myChoice = document.querySelector("#player-4 .bet-choice");
        myChoice.innerHTML = e.target.innerHTML;
        console.log(players[4].bet);

        players[5].bet = betChoice[Math.floor(Math.random() * betChoice.length)];

        console.log(players[5].bet);
        let sixthChoice = document.querySelector("#player-5 .bet-choice");
        sixthChoice.innerHTML = `${players[5].bet}`;

        buttonsBox.remove()

        activateButton(startRound, showdownFunction)
        startRound.innerHTML = `Showdown`;
    }


## Part 11 Key Learnings/Takeaways

Technologies and tools I feel more confident with include HTML, CSS, JavaScript and Shortcut. 

For HTML, I learned how to name classes and IDs more efficiently and only add the elements necessary beyond elements that can be created dynamically through JS. 

For CSS, I had a chance to further practice using Flexbox, managing containers, and grouping selectors efficiently to write DRY code. 

For JavaScript, I learned that breaking out of a for loop allows the code to exit all loops it may be nested under, unlike how return only exists the one loop. I also learned how to keep functions as tight as possible. I can also better break up tasks into manageable chunks through the use of Shortcut. 

This time around, I also became more comfortable with standups, as we did standups every day to discuss what we've done, any problems we've had, and what our intentions for the day were. This was a fun and interactive process. 

I also learned about managing a project through its logic, design, and usability considerations. Setting a challenging, but realistic timeline was key.

The other important thing I learned for next time is to write the README simultaneously while writing code. Keeping the points in mind during the process would allow me to write a more comprehensive README next time. It is quite difficult to recall everything at the end. So I aim to add notes into a draft README template from the start next time.

This project shaped me as an engineer, as it is the first complete project I've throughout and completed on my own. 

It has shown me what, even at this early stage of knowledge-building, is possible. It has proved to me that with more time and learning, the possibilities will grow quickly. 

## Part 12 Bugs

There are no bugs to the best of my knowledge. Although without a test-driven process, it has been difficult to thoroughly ensure bug-free code. Much of the testing has been done by eye and through random trials of the game. 

Some unnecessary comments have been left inside the code for the sake of future improvements.

## Part 13 Future Improvements

In the future, I'd be interested in adding the following improvements:

1. Players' chip count 
--> Reason: This would mimic the true nature of a poker game more accurately and allow players to strategise more ie Betting decisions can be made in a more informed manner
--> How: This would involve more JS math logic 

2. Player name input window 
--> Reason: This would add interactivity and customisation to the game
--> How: This would involve a window popup where an input would be requested and stored as a value inside the player object 

3. Animations between each step of the round
ie Shuffling of cards when they are being generated
--> Reason: This would make the game more entertaining and a more enjoyable experience
--> How: Add setIntervals to the JS in order to wait for animations to be played before enabling the button for the next step of the game, would potentially also involve keyframes that would be triggered by the press of each button, but the details would still need to be researched

4. Make the code formatting/style more consistent
--> Reason: It would be great if the code was more organised so parts of it would be easier to find for a foreign reader. Right now, due to indecision on the most efficient way to write the code, functions and displays are done in varying ways. It would be reasonable to write them in more predictable ways in the future.
--> How: With more practice, I will find out what works best and stick to it. 