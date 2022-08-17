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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerScore);
  result.textContent = `Score : ${playerScore}  Computer Score: ${computerScore}`;
  if(playerSelection === computerSelection) {
    return 'Draw! Play again'
  }

  else if(playerSelection === "rock") {
    
    if(computerSelection === "scissors") {
      
       playerScore++;
    }
    else {
      computerScore++;
    }
  }

  else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      playerScore++;
    }
    else {
      computerScore++;
    }
  }

  else {
    if(computerSelection === "paper") {
      playerScore++;
    }
    else {
      computerScore++;
    }
  }

  

  if(playerScore === 5) {
    console.log("Player is the winner!");
   }
  else if(computerScore === 5) {
    console.log("Computer is the winner!");
   }
}

// function game() {

  
//   while(1) { 
//     const playerSelection = prompt("Play your move");
//     const computerSelection = getComputerChoice();
//     let result = playRound(playerSelection, computerSelection);
    
//     if(result.includes("Win")) {
//       playerScore++;
//     }
//     else if(result.includes("Lose")){
//       computerScore++;
//     }
//     else {
//       continue;
//     }
//     if(playerScore === 5 || computerScore === 5) {
//       break;
//     }
//   }
  
//   if(playerScore > computerScore) {
//    console.log("Player is the winner!");
//   }
//   else {
//    console.log("Computer is the winner!");
//   }
// }

const buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.setAttribute('style', 'display: flex; gap: 10px; justify-content: center;')

const rock = document.createElement("button");
rock.textContent = "Rock";
buttonContainer.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
buttonContainer.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
buttonContainer.appendChild(scissors);




const score = document.createElement("div");
const result = document.createElement("p")

score.appendChild(result);

buttonContainer.appendChild(score)


console.log()

const btn = document.querySelectorAll('button');


btn.forEach((btn) => {

  btn.addEventListener('click', () => {
    playRound(btn.textContent, getComputerChoice());
  });

});




