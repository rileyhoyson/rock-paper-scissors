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
                return "Tie";
                break;
            case "paper":
                return "Lose";
                break;
            case "scissors":
                return "Win";
        }
    }
    else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return "Win";
                break;
            case "paper":
                return "Tie";
                break;
            case "scissors":
                return "Lose";
        }   
    } 
    switch (computerSelection) {
        case "rock":
            return "Win";
            break;
        case "paper":
            return "Lose";
            break;
        case "scissors":
            return "Tie";
    } 
}  

const playerChoice = "rock";

let game = () => {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(playerChoice.toLowerCase(), getComputerChoice())
        if (roundResult == "Win") {
            score++;
        } else if (roundResult == "Tie") {
            i--;
        }
    }
    console.log(`You won ${score} of 5 rounds.`)
}

game();