// test 1
let findingCircleTokens = winningComboIndex.indexOf(circleTokens);
while (findingMatch ){
    console.log('hjdsjhvds')
}
let findingCrossTokens = winningComboIndex.indexOf(crossTokens);
while(findingCrossTokens = 3){
    console.log('jsdcvj')
}


// test 2
if (winningComboIndex[i].indexOf(circleTokens) == circleTokens){
    console.log('circle wins')
    }
    if (winningComboIndex[i].indexOf(crossTokens) == crossTokens){
        console.log('cross wins')
    }

// test 3
while (winningComboIndex.indexOf(circleTokens[i]) != -1){
    console.log('circle wins')
    }
    while (winningComboIndex.indexOf(crossTokens[i]) != -1){
    console.log('circle wins')
    }

// test 4
for (let i = 0; i < winningComboIndex.length; i++){
    while (winningComboIndex.indexOf(circleTokens[i]) != -1){
        console.log('circle wins')
    }
    while (winningComboIndex.indexOf(crossTokens[i]) != -1){
        console.log('circle wins')
        }
    }


// test 5
if (winningComboIndex.indexOf(circleTokens) != -1){
    console.log('circle wins');
}
if (winningComboIndex.indexOf(crossTokens) != -1){
    console.log('cross wins');
}

// test 6
for (let i = 0; i < winningComboIndex.length; i++) {
    const test1 = winningComboIndex.filter(element => circleTokens.includes(element))
    console.log(test1)
}

// test 7
const test1 = winningComboIndex.filter(element => circleTokens.includes(element))
console.log(test1)