console.log('lets do this!');

// declaring and grabbings stuff from html
const restartBtn = document.querySelector('.restart-btn');
const startBtn = document.querySelector('.start-btn')
const tokenChoiceBtn = document.querySelector('.choose-btn');
const aiBtn = document.querySelector('.ai-btn');

let mainElement = document.querySelector('.game-wrap-around')
const tokenChoices = document.querySelector('.possible-tokens')
const squaresNodeList = document.querySelectorAll('.playing-field');
const winningMessage = document.querySelector('.winning-message');
let paragraphHeader = document.querySelector('.page-title-p');
const extraTokenNodeList = document.querySelector('.extra-tokens')
const musicBox = document.querySelector('.music')
let musicBtn = document.querySelector('.music-btn')

let currentShape = "circle";
let isWinner = false;
let isPlaying = false;

let circleTokens = [];
let crossTokens = [];
let specialToken = [];

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




// nodelist to an array
const playingFieldSquares = Array.prototype.slice.call(squaresNodeList);
const extraTokensArray = Array.prototype.slice.call(extraTokenNodeList)

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


// change background to circle image
const circleFunction = (element) => {
    element.classList.add('circle')
    displayWhosTurn("Pink, it's your turn!")
}


// change background to cross img
const crossFunction = (element) => {
    element.classList.add('cross')
    displayWhosTurn("Purple, it's your turn")

}


// display whos turn it is
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


// display winner
const displayWinner = () => {
     if (isWinner){
        
        paragraphHeader.innerHTML = 'Press RESTART'
            
        removeAdVisible(winningMessage, mainElement)

        currentShape === 'circle' ? winningMessage.innerHTML = 'Purple Won' : winningMessage.innerHTML = 'Pink Won'

        
    } else if ((circleTokens.length || crossTokens.length) === 5) { 
        paragraphHeader.innerHTML = 'Press RESTART'

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


// reset page to original
const resetPage = () => {
    winningMessage.classList.contains('visibility-none') ? false : winningMessage.classList.add('visibility-none')

    mainElement.classList.contains('visibility-none') ? mainElement.classList.remove('visibility-none') : false

    tokenChoices.classList.add('visibility-none')
}


// saving token choice
extraTokensArray.forEach(
    function (element) {
        element.onclick = () => {
            element.push(specialToken.indexOf(element))
        }

    }
)

console.log(specialToken)

// toggle for music
function toggleMusic () {
    return musicBox.paused ? musicBox.play(musicBtn.innerHTML = "STOP PLAY") : musicBox.pause(musicBtn.innerHTML = "START PLAY");
}

musicBtn.onclick = () => {toggleMusic()}











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

    winningMessage.classList.contains('visibility-none') ? false : winningMessage.classList.add('visibility-none')

    removeAdVisible(tokenChoices, mainElement)
}

// music start / stop

