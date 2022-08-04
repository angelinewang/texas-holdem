This is in markdown: Way to write documentation rather than having to write HTMl 
--> There is a syntax for writing Markdown and rendered to make it look pretty
--> Rendered Markdown 
--> Syntax that renders to HTML or PDFs or other things as well --> Text-based way 
# Project 1: Texas Hold'em
What should commits be used for?
= Small anatomic commits: As you add functionality
= View commits in Commits in the GitHub repo 
--> Click on Commit && See exactly what was added in each: 
Can come back to this and see how you did things, use in future

## Part 1 Data
## Part 2 Presentation 
## Part 3 Views 
## Part 4 Styles
## Part 5 DOM Manipulation
## Part 6 Shortcut
Shortcut is being used to organise the project and its tasks

### Goal of Game 
Win as many chips as possible
--> 1 pot at a time
1 pot = During Showdown having the best hand after the final community card is dealt OR after all other players fold 
--> Essentially winning 1 round equals winning 1 pot 
#### Ranked List of Hands

#### List of Cards

### Parts of the Game 
1. Dealer deals 1 card to each player clockwise /
2. Dealer deals another card to each player clockwise /
3. The Small Blind makes a bet (mandatory)
4. The Big Blind makes a bet (mandatory)
5. Dealer deals 1 card to each player clockwise
6. Dealer deals another card to each player clockwise



7. Under the Gun (left of the Big Blind) makes a bet
Options:
a. Fold
b. Call the Big Blind 
c. Raise



8. Every player has same 3 options clockwise
9. When reach back to Big Blind
Options:
a. Check 
b. Raise 





10. IF > 1 Player remain:

Move Dealer 1 position to the left //Not dealing with moving positions yet 

Burn 1st card on top of deck 

Deal 3 cards into middle of table 


11. Betting starts with previous Big Blind(now Small Blind)
Options:
a. Check
b. Fold 
c. Call the Big Blind 
d. Raise 







12. After Big Blind: IF > 1 Player remain:
a. Move Dealer 1 position left 
b. Deal 1 community card in middle of table






13. Betting starts with previous Big Blind(now Small Blind)
Options:
a. Check
b. Fold
c. Call the Big Blind
d. Raise


14. IF only 1 Player remains AFTER Big Blind:
= The 1 Player = Winner

--> 



15. OR IF > 1 Player remains AFTER Big Blind:
a. Everyone's cards are flipped over
b. Player with best hand = Winner


16. Pot rewards to Winner
17. Repeat process the same number of times as number of players

EVERYTHING LEFT: 

#1 Do Showndown logic

List of Code Combos:

1. Royal Flush 
Each player (Community Cards + Player Cards = Array)

Array.values = A, K, Q, J, 10
Array.suits = All Same

2. Straight Flush

Array.suits = All Same 
Array.Values.sort
--> Each value's index is 1 index less than its previous with the values array 

3. Four-of-a-Kind

4 of the Values within the Array are the same 
Suits don't matter

4. Full House
Values = 3 values are the same and 2 values are also the same
Suits = Don't matter

5. Flush 
Values don't matter 
Suits = All same 

6. Straight 
Suits = Don't matter
Values = Consecutive 

7. Three-of-a-Kind 
Suits = Don't matter
Values = 3 are the same

8. Two-Pair
Suits = Don't matter
Values = 2 cards are the same, another 2 cards the same

9. One-Pair
Values = 2 cards are the same 
Suits = Don't matter

10. High Card
Does not equal any of the above hands

a. Compare cards 
b. Determine winner 
c. Reward chips to winner











#2 DO Default WINNER LOGIC = Log winner && reword chips && then show next round button 

#3 Console log && Debug everything to ensure everything existing works && Refact what is already done 

# Texas Hold'em Poker Game 

## Part 1 Description

This was completed between July 23rd - Aug 6th 2022 as a part of the 1st General Assembly SEI Project where we were tasked to create a game. Technologies used include HTML, CSS and JavaScript. 

## Part 2 Deployment link

This project can be found on my person Github at: 

Insert your Deployment link here:

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

## Part 8 Build/Code Process

1. Note 3 key stages of development 
2. Grab 1 code snippet from each key stage 
3. Add descriptions to each snippet
= 1. How you did it 2. Why you did it 

## Part 9 Challenges

1. 3 Technical Challenges 
For each:
2. Why was each a challenge? 
3. How did you problem solve? How did you solve each challenge?
4. What were the tools you used?

## Part 10 Wins

1. 3 Interesting Problem Solving you did 
For each:
2. Add a Strong Section of code

## Part 11 Key Learnings/Takeaways

1. What Technologies/Tools do you now feel more confident with? 
For each:
2. What did you specifically learn about it?

3. What engineering processes did you become more comfortable with? 
ie Standups, Pair programming, Project management
Fo each:
4. What did you learn from these processes?

5. How did it shape you as an engineer?

- Write Read.md simultaneously while writing code, keeping the points in mind, rather than trying to recall everything as the end 
--> Add notes on a draft Readme.md from beginning of process

## Part 12 Bugs

There are no bugs to the best of my knowledge. Although without a test-driven process, it has been difficult to thoroughly ensure bug-free code. Much of the testing has been done by eye and through random trials of the game. 

Some unnecessary comments have been left inside the code for the sake of future improvements.

## Part 13 Future Improvements

1. List 3 future improvements 
2. Why you would do them and what you would need to do them




