function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {
    let theWinnerIs = "test";
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        theWinnerIs = "tie";
        return theWinnerIs;
    }

    switch (playerChoice) {
        case "Rock":
            if (computerChoice === "Scissors") {
                theWinnerIs = "player";
                playerScore++;
            }
            else {
                theWinnerIs = "computer1";
                computerScore++;
            }
            break;

        case "Paper":
            if (computerChoice === "Rock") {
                theWinnerIs = "player";
                playerScore++;
            }
            else {
                theWinnerIs = "computer2";
                computerScore++;
            }
            break;

        case "Scissors":
            if (computerChoice === "Paper") {
                theWinnerIs = "player";
                playerScore++;

            }
            else {
                theWinnerIs = "computer3";
                computerScore++;
            }
            break;
    }
    return theWinnerIs;
}

const divResult = document.querySelector('.result');
const divPlayerScore = document.querySelector('.player-score');
const divComputerScore = document.querySelector('.computer-score');
const btn = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

btn.forEach(function (button) {
    button.addEventListener('click', () => {
        divResult.textContent = playRound(button.textContent, getComputerChoice());
        divPlayerScore.textContent = playerScore;
        divComputerScore.textContent = computerScore;
    });
});