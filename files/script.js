console.log('lets do this!');

// declaring and grabbings stuff from html
const restartBtn = document.querySelector('.restart-btn');
const startBtn = document.querySelector('.start-btn')
const tokenChoiceBtn = document.querySelector('.choose-btn');
const aiBtn = document.querySelector('.ai-btn');

let mainElement = document.querySelector('.main-wrap-around')
const tokenChoices = document.querySelector('.possible-tokens')
const squaresNodeList = document.querySelectorAll('.playing-field');
const winningMessage = document.querySelector('.winning-message');
let paragraphHeader = document.querySelector('.page-title-p');

let currentShape = "circle";
let isWinner = false;

let circleTokens = [];
let crossTokens = [];

const winningComboIndex = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8]   
];




//nodelist to an array
const playingFieldSquares = Array.prototype.slice.call(squaresNodeList);

// toggle between two functions
const toggleTurns = (element) => {
    if ( currentShape === "circle" ){
        circleFunction(element);
        currentShape = "cross"
    }
    else {
        crossFunction(element)
        currentShape = "circle"
    }
}


// function to change background to circle image
const circleFunction = (element) => {
    element.classList.add('circle')
    displayWhosTurn("Pink, it's your turn!")
}


// function to change background to cross img
const crossFunction = (element) => {
    element.classList.add('cross')
    displayWhosTurn("Purple, it's your turn")

}


// function to display whos turn it is
const displayWhosTurn = (content) => {
    paragraphHeader.innerHTML = content
    return paragraphHeader.innerHTML
} 


// GAME 
const game = () => {
    playingFieldSquares.forEach(
        function (element) {
            // removes classes so it clears fields
            element.classList.remove('circle', 'cross')
            element.onclick = () => {
                // saving input to empty variables
                currentShape === 'circle' ? circleTokens.push(playingFieldSquares.indexOf(element)) : crossTokens.push(playingFieldSquares.indexOf(element)) 

                // calling winning
                isWinner = determineWinner(currentShape);

                // display winner
                displayWinner()

                // taking turns
                toggleTurns(element)

                // remove click event on current element
                element.onclick = null

                console.log('this is current shape', currentShape)
            };
        }
    )
}


// check if tokens numbers match winning numbers
const determineWinner = (currentShape) => {
    circleORcrossArray = currentShape === 'circle' ? circleTokens : crossTokens

    if (circleORcrossArray.length >= 3){
        // looping through every winningcombo arrays
        const hasWon = winningComboIndex.some(winningOptionArr => {
           // checking each array one by one > index 
            return winningOptionArr.every(winningIndex => {
                // is this winning index includes circleOrcross return boolean
                return circleORcrossArray.includes(winningIndex)
           })
        }) 
        return hasWon ? currentShape : false 
    } 
    return false 
}


// function to display winner
const displayWinner = () => {
     if (isWinner){
        removeAdVisible(winningMessage, mainElement)
        currentShape === 'circle' ? winningMessage.innerHTML = 'Purple Won' : winningMessage.innerHTML = 'Pink Won'
    } else if ((circleTokens.length || crossTokens.length) === 5) {
        winningMessage.innerHTML = 'Its a Tie'
        removeAdVisible(winningMessage, mainElement)
    } 
}


// remove invisibility class from first and add it to second else the opposite 
const removeAdVisible = (removeFirst, addFirst) => {
    if (removeFirst.classList.contains('visibility-none')){
        removeFirst.classList.remove('visibility-none')
        addFirst.classList.add('visibility-none')
    } else {
        removeFirst.classList.add('visibility-none')
        addFirst.classList.remove('visibility-none')
    }
}


// reset page to original - NOT DONE
const resetPage = () => {
    winningMessage.classList.contains('visibility-none') ? false : winningMessage.classList.add('visibility-none')

    mainElement.classList.contains('visibility-none') ? mainElement.classList.remove('visibility-none') : false
}


// BUTTONS


// start button
startBtn.onclick = (event) => {
    event.preventDefault()
    displayWhosTurn('Purple it is your turn!')
    game()
    
}

// restart button 
restartBtn.onclick = (event) => {
    event.preventDefault();
    circleTokens = [];
    crossTokens = [];
    currentShape = 'circle';
    isWinner = false;
    resetPage()
    game()
}

// choose button
tokenChoiceBtn.onclick = function (event) {
    event.preventDefault()
    removeAdVisible(tokenChoices, mainElement)
}



