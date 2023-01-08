console.log('lets do this!');

// declaring and grabbings stuff from html
const playerOneCross = 1;
const playerTwoCircle = 2;
const refreshBtn = document.querySelector('#refresh-btn');
const tokenChoice = document.querySelector('#choose-btn');
let paragraphHeader = document.querySelector('.page-title-p');
let playingField = document.querySelector('.game')
const squaresNodeList = document.querySelectorAll('.playing-field')
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


// function to target each playinffieldquare when its clicked
playingFieldSquares.forEach(
    function (element) {
        element.onclick = function () {
            alert ('works')
        }}
)




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
    if (element.getAttribute('class') === true) {
        element.removeEventListener('onclick', function (){
            return element
        })
    }
}



// switch statement to change background to x or o
switch (true) {
    case (crossFunction):
    case (circleFunction):
        break
    
}



