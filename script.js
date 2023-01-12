console.log('lets do this!');

// declaring and grabbings stuff from html
const startBtn = document.querySelector('.restart-btn');
// const startBtn = document.querySelector('.start-btn')
const tokenChoiceBtn = document.querySelector('.choose-btn');
const aiBtn = document.querySelector('.ai-btn');

let mainElement = document.querySelector('.game-wrap-around')
const squaresNodeList = document.querySelectorAll('.playing-field');
let paragraphHeader = document.querySelector('.page-title-p');
const winningMessage = document.querySelector('.winning-message');

const tokenChoices = document.querySelector('.possible-tokens')
const extraTokenNodeList = document.querySelector('.extra-tokens')

const musicBox = document.querySelector('.music')
let musicBtn = document.querySelector('.music-btn')

let circleScore = document.querySelector('.player-1-score')
let crossScore = document.querySelector('.player-2-score')
let tieScore = document.querySelector('.tie-score')

// global variables
let currentShape = "circle";
let isWinner = false;
let isPlaying = false;

let circleTokens = [];
let crossTokens = [];
let specialToken = [];

let circleWin = 0;
let crossWin = 0;
let tieWin = 0;

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
                
                // taking turns if there is no winner
                !isWinner && toggleTurns(element)
                
                // display winner
                displayWinner()
                
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
        // looping through every winningcombo arrays (some takes a function)
        const hasWon = winningComboIndex.some(winningOptionArr => {
           // checking each array one by one by their index (every takes a function)
            return winningOptionArr.every(winningIndex => {
                // if this winning index includes circleOrcross number then return boolean (includes does NOT take a function)
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
         removeAdVisible(winningMessage, mainElement)
         
         currentShape === 'circle' ? winningMessage.innerHTML = 'Purple Won' : winningMessage.innerHTML = 'Pink Won'
         
         paragraphHeader.innerHTML = 'Press RESTART'

         if (isWinner) {
            if (currentShape === 'circle') {
                circleWin ++
                circleScore.innerText = circleWin
            } else if (currentShape === 'cross') {
                crossWin ++
                crossScore.innerText = crossWin
            }     
        }

    } else if ((circleTokens.length || crossTokens.length) === 5) { 
        
        winningMessage.innerHTML = 'Its a Tie'
        
        removeAdVisible(winningMessage, mainElement)
        
        paragraphHeader.innerHTML = 'Press RESTART'

        tieWin ++
        tieScore.innerText = tieWin
    } 
}

// toggle between two functions =CHANGE put to bottom
function toggleTurns(element) {
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
function circleFunction (element) {
    element.classList.add('circle')
    displayWhosTurn("Pink, it's your turn!")
}


// change background to cross img
function crossFunction (element) {
    element.classList.add('cross')
    displayWhosTurn("Purple, it's your turn")

}


// display whos turn it is
function displayWhosTurn (content) {
    paragraphHeader.innerHTML = content
    return paragraphHeader.innerHTML
} 




// remove invisibility class from first and add it to second else the opposite 
function removeAdVisible (removeFirst, addFirst) {
    if (removeFirst.classList.contains('visibility-none')){
        removeFirst.classList.remove('visibility-none')
        addFirst.classList.add('visibility-none')
    } else {
        removeFirst.classList.add('visibility-none')
        addFirst.classList.remove('visibility-none')
    }
}


// reset page to original
function resetPage () {
    !winningMessage.classList.contains('visibility-none') && winningMessage.classList.add('visibility-none')

    mainElement.classList.contains('visibility-none') && mainElement.classList.remove('visibility-none')

    tokenChoices.classList.add('visibility-none')
}


// saving token choice - NOT DONE YET
extraTokensArray.forEach(
    function (element) {
        element.onclick = () => {
            element.push(specialToken.indexOf(element))
        }
    }
)




// BUTTONS
// restart button 
startBtn.onclick = (event) => {
    event.preventDefault();
    startBtn.innerHTML = 'Restart'
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
function toggleMusic () {
    return musicBox.paused ? musicBox.play(musicBtn.innerHTML = "STOP PLAY") : musicBox.pause(musicBtn.innerHTML = "START PLAY");
}

musicBtn.onclick = () => {toggleMusic()}

