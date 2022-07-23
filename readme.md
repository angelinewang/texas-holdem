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
1. Dealer deals 1 card to each player clockwise
2. Dealer deals another card to each player clockwise
3. The Small Blind makes a bet (mandatory)
4. The Big Blind makes a bet (mandatory)
5. Dealer deals 1 card to each player clockwise
6. Dealer deals another card to each player clockwise
7. Under the Fun (left of the Big Blind) makes a bet
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
Move Dealer 1 position to the left
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
15. OR IF > 1 Player remains AFTER Big Blind:
a. Everyone's cards are flipped over
b. Player with best hand = Winner
16. Pot rewards to Winner
17. Repeat process the same number of times as number of players