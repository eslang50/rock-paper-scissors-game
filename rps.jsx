function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if(choice === 0) {
    return 'Rock';
  }
  else if (choice === 1) {
    return 'Paper';
  }
  else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if(playerSelection === computerSelection) {
    return 'Draw! Play again'
  }

  else if(playerSelection === "rock") {
    if(computerSelection === "scissors") {
      return "You Win! Rock beats Scissors"
    }
    else {
      return "You Lose! Paper beats Rock"
    }
  }

  else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      return "You Win! Paper beats Rock"
    }
    else {
      return "You Lose! Scissors beats Paper"
    }
  }

  else {
    if(computerSelection === "paper") {
      return "You Win! Scissors beats Paper"
    }
    else {
      return "You Lose! Rock beats Scissors"
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++) {
    const playerSelection = prompt("Play your move");
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if(result.includes("Win")) {
      playerScore++;
    }
    else if(result.includes("Lose")){
      computerScore++;
    }
    else {
      continue;
    }
  }
  if(playerScore === computerScore) {
    console.log("Draw!");
  }
  else if(playerScore > computerScore) {
   console.log("Player is the winner!");
  }
  else {
   console.log("Computer is the winner!");
  }
}

game();

