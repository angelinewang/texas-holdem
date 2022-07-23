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