const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  }
  return "scissors";
};

const getPlayerChoice = () => {
  return prompt("Rock, paper or scissors?").toLowerCase();
};

const playRound = (playerSelection, computerSelection) => {
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
  } else if (playerSelection == "paper") {
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
};

const printRoundResult = (playerSelection, playRoundResult) => {
  let result;
  if (playRoundResult == "Win") {
    switch (playerSelection) {
      case "rock":
        result = "Rock beats scissors. You win.";
        break;
      case "paper":
        result = "Paper beats rock. You win.";
        break;
      case "scissors":
        result = "Scissors beats paper. You win.";
    }
  } else if (playRoundResult == "Lose") {
    switch (playerSelection) {
      case "rock":
        result = "Paper beats rock. You lose.";
        break;
      case "paper":
        result = "Scissor beats paper. You lose.";
        break;
      case "scissors":
        result = "Rock beats scissors. You lose.";
    }
  } else {
    return;
  }
  console.log(result);
};

let game = () => {
  let score = 0;
  let playerChoice = getPlayerChoice(); // Get initial player choice
  for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerChoice, getComputerChoice());
    printRoundResult(playerChoice, roundResult);
    switch (roundResult) {
      case "Win":
        score++;
        playerChoice = getPlayerChoice(); // If the round is won we need the player to choose again for the next round.
        break;
      case "Lose":
        playerChoice = getPlayerChoice(); // Same with if the round is lost.
        break;
      case "Tie": // If the round is a tie, we don't ask the user to choose again because we replay the round with the
        i--;      // same playerChoice until we get a winner.
        break;
    }
  }
  printGameResult(score);
};

const printGameResult = (score) => {
  console.log(`You won ${score} of 5 rounds.`);
};

game();
