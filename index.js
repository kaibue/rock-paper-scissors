function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = alert("Wählen sie Rock, Paper oder Scissors");
    return playerChoice;
}




function playRound(playerChoice, computerChoice) {
    let theWinnerIs = "";
    const playerChoiceLower = playerChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    if (playerChoiceLower === computerChoiceLower) {
        theWinnerIs = "tie";
        return theWinnerIs;
    }

    switch (playerChoice) {
        case "rock":
            if (computerChoiceLower === "scissors") {
                theWinnerIs = "player";
            }
            else { theWinnerIs = "computer"; }
            break;

        case "paper":
            if (computerChoiceLower === "rock") {
                theWinnerIs = "player";
            }
            else { theWinnerIs = "computer"; }
            break;

        case "scissors":
            if (computerChoiceLower === "paper") {
                theWinnerIs = "player";
            }
            else { theWinnerIs = "computer"; }
            break;
    }
    return theWinnerIs;
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 1; i <= 5; i++) {
        const playerChoice = "rock";//getPlayerChoice();
        const computerChoice = getComputerChoice();
        let winner = playRound(playerChoice, computerChoice);
        if (winner === "player") {playerCount++;}
        if (winner === "computer") {computerCount++;}
    }   
    if (playerCount > computerCount) {
        console.log("The player wins with " + playerCount + " points over the computers " +  computerCount + " points.");
    }
    else if (playerCount < computerCount) {
        console.log("The computer wins with " + computerCount + " points over the players " + playerCount + " points.")
    }
    else {console.log("It is a tie with the player having " + playerCount + " points and the computer having " + computerCount + " points as well.")}
}

console.log(game());