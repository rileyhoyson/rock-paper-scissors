let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } return "scissors"
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock":
                playRound(playerSelection.toLowerCase(), getComputerChoice());
                break;
            case "paper":
                return "Paper beats rock. You lose.";
                break;
            case "scissors":
                return "Rock beats scissors. You win.";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return "Paper beats rock. You win.";
                break;
            case "paper":
                playRound(playerSelection.toLowerCase(), getComputerChoice());
                break;
            case "scissors":
                return "Scissor beats paper. You lose.";
        }   
    } 
    switch (computerSelection) {
        case "rock":
            return "Rock beats scissors. You lose.";
            break;
        case "paper":
            return "Scissors beats paper. You win.";
            break;
        case "scissors":
            playRound(playerSelection.toLowerCase(), getComputerChoice());
    } 
}  

const playerChoice = "rock";

console.log(playRound(playerChoice.toLowerCase(), getComputerChoice()));