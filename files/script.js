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
]



//nodelist to an array
const playingFieldSquares = Array.prototype.slice.call(squaresNodeList);

// toggle between two functions
let currentShape = "circle";
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
    cantClickAgain(element)
}

// function to change background to cross img
const crossFunction = (element) => {
    element.setAttribute('class', 'cross')
    displayWhosTurn("It's your turn Purple")
    cantClickAgain(element)
}

// function to display whos turn it is
const displayWhosTurn = (content) => {
    paragraphHeader.innerHTML = content
    return paragraphHeader.innerHTML
} 

// function to take off event listener if they have class circle or cross
const cantClickAgain = (element) => {
    console.log(element)
    console.log(onClickFunction)
    if (element.classList.contains('circle') || element.classList.contains('cross')) {
        element.removeEventListener('click',onClickFunctionBind, false)
    }
}

// fucntion for the onclick event
const onClickFunction = (element) => {
    toggleTurns(element)
}

// function to target each playinffieldquare when its clicked >> bind (has to have 2 parameter) >> binding this data to function so it doesnt get called straight away
let choosenTokens = [];
playingFieldSquares.forEach(
    function (element) {
        onClickFunctionBind = onClickFunction.bind(this, element);
        element.addEventListener('click', onClickFunctionBind);
        choosenTokens.push(playingFieldSquares.indexOf(element));
    }
)

console.log(choosenTokens);












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



