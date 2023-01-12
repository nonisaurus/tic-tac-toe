# My First Project 

## **Tic-Tac-Toe Game**
***
![](/pictures/final_look_of_game.png)
***

<br>

## **Requirements**
***
- Render a game board in the browser
- Switch turns between X and O (or whichever markers you select)
- Visually display which side won if a player gets three in a row, or show a draw if neither player wins
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use JavaScript for DOM manipulation
- Deploy your game online, where the rest of the world can access it.
- Use semantic markup for HTML and CSS (adhere to best practices)
Have well-formatted, and well-commented code

<br>

## **User Stories** 
***
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

<br>

## **Wireframe**  
***
![](/pictures/wireframe.png)

<br>

## **Technology used**
***
- HTML
- CSS
- JavaScript

<br>

## **Building journey** 
***
### Planning
I was given just over 5 days to create this project. I started by making a wireframe of the game and picked a colour scheme that represent me. Then I tried to think about the logic and got stuck in. I tried write pseudocode but I ended up re writing everything 3 times because my code felt WET. I wrote a lot of notes on what I need to do as I was building the game.

<br>

![](/pictures/thinking-out-loud.png)

<br>

### **HTML and CSS**
First I set up my HTML file and I made all the components of the game. Styled it with CSS so I can see what is the game going to look like. (I like visualising first)

<br>

### **JavaScript**
The board was already done in CSS so I had to add functionality to it: 
- declaired everything I need for the game
- created functions for changing background pictures, toggle functions
- recorded the user inputs
- compared these to winning possibilities
- created a display for the winner
- set up start and charater choice buttons
- made the game responsive to most screens
- added music

<br>

### **Challenges**
My first obstacle was the fact that I had to write this code on my own. But I got stuck in and I actually had fun.

I had one main blocker when I had to loop through my winning options and my user input options and see when they match. I got some help from my teacher and made it work as it shown below:

```
const determineWinner = (currentShape) => {

    circleORcrossArray = currentShape === 'circle' ? circleTokens : crossTokens

    if (circleORcrossArray.length >= 3){

        // looping through every winningcombo arrays (.some takes function)

        const hasWon = winningComboIndex.some(winningOptionArr => {

           // checking each array one by one by their index (.every takes function)

            return winningOptionArr.every(winningIndex => {

                // if this winning index includes circleOrcross number then return boolean (includes does NOT take a function)

                return circleORcrossArray.includes(winningIndex)
           })
        }) 
        return hasWon ? currentShape : false 
    } 
    return false 
}
```

<br>

### **Wins**
My biggest win is that I finished my very first project! 

Also I am very prouf of myself that I can use conditional operator!

<br>

### **Key Learnings**
- I can confidently say I love CSS
- I need more practice to shift my way of thinking more like a developer
- In the future I want to aim to make my code dryer 

<br>

### **Future Improvements**
- add local storage
- create an AI
- figure out how could two player play from different devices
- there are unused buttons for the above in the code I want to utilise in the future

<br>

### **Bugs**
When you end a game by a win or toe, you can click on Token Choices and go back to the game without the last step.

<br>


## **The game**  
***
The game can be accessed [here](https://nonisaurus.github.io/tic-tac-toe/)

<br>

|| Used resources
| --- | --- |
| 1 | [button style in header](https://webgolovolomki.com/en/how-to-make-a-button-click-effect-in-css/) |
| 2 | [font](https://www.fontspace.com/category/bubbles#_=_) |
| 3 | [wireframe](https://www.canva.com/) |

