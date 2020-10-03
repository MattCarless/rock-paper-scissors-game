// HTML elements connected through DOM

let gamesPlayed = document.querySelector("#games-played-p");
let gamesWon = document.querySelector("#games-won-p");
let gamesDrawn = document.querySelector("#games-drawn-p");
let gamesLost = document.querySelector("#games-lost-p");

let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");

let displayResultHeader = document.querySelector("#display-result-h2");



//  Functions that check if buttons have been clicked 

buttonResponse = (event) => {
console.log(event);
if (event.toElement.innerText === "ROCK") {
    let playerMove = "Rock";
    console.log(playerMove);
} else if (event.toElement.innerText === "PAPER") {
    let playerMove = "Paper";
    console.log(playerMove);
} else {
    let playerMove = "Scissors";
    console.log(playerMove);
}

};

rockButton.addEventListener("click", buttonResponse);
paperButton.addEventListener("click", buttonResponse);
scissorsButton.addEventListener("click", buttonResponse);




computerMove = () => {
    const computerMovesArray = ["Rock", "Paper", "Scissors"];
    let randomComputerMove = computerMovesArray[Math.floor(Math.random() * computerMovesArray.length)]
    console.log(randomComputerMove);
}




whoWins = (callback, callback2) => {


    if (playerMove === randomComputerMove) {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've drawn!`
    }

    else if (playerMove === "Rock" && randomComputerMove === "Scissors") {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've won!`
    }

    else if (playerMove === "Rock" && randomComputerMove === "Paper") {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've Lost!`
    }

    else if (playerMove === "Paper" && randomComputerMove === "Rock") {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've won!`
    }

    else if (playerMove === "Paper" && randomComputerMove === "Scissors") {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've lost!`
    }

    else if (playerMove === "Scissors" && randomComputerMove === "Paper") {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've won!`
    }

    else {
        displayResultHeader.innerText = `You picked ${playerMove}, the computer picked ${randomComputerMove}. You've lost!`
    }

};



// 

