console.log('lets do this!');

// declaring and grabbings stuff from html
const restartBtn = document.querySelector('.restart-btn');
const startBtn = document.querySelector('.start-btn')
const tokenChoiceBtn = document.querySelector('.choose-btn');
const aiBtn = document.querySelector('.ai-btn');

const tokenChoices = document.querySelector('.possible-tokens')
const squaresNodeList = document.querySelectorAll('.playing-field');
const winningMessage = document.querySelector('.winning-message');
let paragraphHeader = document.querySelector('.page-title-p');

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
let currentShape = "circle";
let isWinner = false;

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
    element.setAttribute('class', 'circle')
    displayWhosTurn("It's your turn Pink")
}

// function to change background to cross img
const crossFunction = (element) => {
    element.setAttribute('class', 'cross')
    displayWhosTurn("It's your turn Purple")

}

// function to display whos turn it is
const displayWhosTurn = (content) => {
    paragraphHeader.innerHTML = content
    return paragraphHeader.innerHTML
} 

// function to target each playinffieldquare when its clicked 
let circleTokens = [];
let crossTokens = [];

playingFieldSquares.forEach(
    function (element) {
        element.onclick = () => {
            
            // saving input to empty variables -- REWRITE LATER
            if ( currentShape === 'circle'){
                circleTokens.push(playingFieldSquares.indexOf(element))
            } else if ( currentShape === 'cross') {
                crossTokens.push(playingFieldSquares.indexOf(element))  
            }

            // calling winning
            isWinner = determineWinner(currentShape);
            console.log('isWinnner-->', isWinner)
            // if 

            // taking turns
            toggleTurns(element)

            // remove click event on current element
            element.onclick = null
        };
    }
)

// check if tokens numbers match winning numbers
const determineWinner = (currentShape) => {
    const arrayToCheck = currentShape === 'circle' ? circleTokens : crossTokens
    // console.log('array to check', arrayToCheck , currentShape);
    if (arrayToCheck.length >= 3){
        // looping through every winningcombo arrays
        const hasWon = winningComboIndex.some(winningOptionArr => {
           // checking each array one by one > index 
            return winningOptionArr.every(winningIndex => {
                // is this winning index includes arraytocheck? return boolean
                return arrayToCheck.includes(winningIndex)
           })
        }) 
        return hasWon ? currentShape : false 
    } 
    return false 
}









// start button
startBtn.onclick = (event) => {
    event.preventDefault()
    paragraphHeader.innerHTML = "Its your turn Purple";
    return paragraphHeader
}

// toggle choose button
tokenChoiceBtn.onclick = function (event) {
    event.preventDefault()
    let mainElement = document.querySelector('.main-wrap-around')
    if (tokenChoices.classList.contains('visibility-none')){
        tokenChoices.classList.remove('visibility-none');
        mainElement.classList.add('visibility-none')

    } else {
        tokenChoices.classList.add('visibility-none')
        mainElement.classList.remove('visibility-none')
    }
}



