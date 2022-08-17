function getComputerChoice() {
  let choice = ['Rock', 'Paper', 'Scissors'];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  winner.textContent = '';
  
  if(playerSelection === computerSelection) {
    winner.textContent = "Draw!"
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
    winner.textContent = "You are the winner! \r\nRefresh the page the play again!";
    disable();
   }
  else if(computerScore === 5) {
    winner.textContent = "Computer is the winner! \r\nRefresh the page the play again!";
    disable();
   }

   result.textContent = `Score : ${playerScore}  Computer Score: ${computerScore}`;
} 

const buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.setAttribute('style', 'display: inline-block; gap: 18px; justify-content: center;')


const score = document.createElement("div");
const result = document.createElement("p")

const winner = document.createElement("p");

winner.setAttribute('style', 'white-space: pre;');

score.appendChild(result);
score.appendChild(winner)

buttonContainer.appendChild(score)

const btn = document.querySelectorAll('input');

let playerScore = 0;
let computerScore = 0;

function disable() {
  let elems = document.getElementsByClassName("btn");

  for(let i = 0; i < elems.length; i++) {
  elems[i].disabled = true;
}
}

btn.forEach((btn) => {

  btn.addEventListener('click', () => {
    playRound(btn.value);
  });

});




