let user_score = 0;
let pc_score = 0;






// Now next level is the game function and scoring and all that.

// I have to let User play this game with computer for 5 times in a row, ie 5 times in a row
// I have to keep score of each game and report a winner in the end depending upon who got the more score out of 5.
//  At this point you should be using console.log() to display the results of each round and the winner at the end.


function game() {
    for (let i = 0; i < 5; i++) {
        function getComputerChoice() {
            let choices = ["Rock", "Paper", "Scissors"]
             return choices[Math.floor(Math.random() * choices.length)]
        }
        
        function playRound(playerSelection, computerSelection) {
        
            if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "rock" && computerSelection === "Scissors" ){
                console.log('You won, computer chose Scissors you chose rock');
                return ++user_score;
          } else if (playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "scissors" && computerSelection === "Paper"){
            console.log('You won, computer chose Paper you chose scissors');
                return ++user_score;
          } else if (playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "paper" && computerSelection === "Rock"){
            console.log('You won, computer chose Rock you chose Paper');
                return ++user_score;
          } else if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Rock" && playerSelection === "paper"){
            console.log('You lose Computer chose Rock and you chose paper');
                return ++pc_score;
          } else if (computerSelection === "Scissors" && playerSelection === "Paper" || computerSelection === "Scissors" && playerSelection === "paper"){
            console.log('You lose Computer chose scissors and your chose paper');
            return ++pc_score;
        }   else if (computerSelection === "Paper" && playerSelection === "Rock" ||computerSelection === "Paper" && playerSelection === "rock" ){
            console.log('You lose Computer chose paper and you chose rock');
            return ++pc_score;
        } else if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "rock" && computerSelection === "Rock" ){
            console.log("It's A Draw !!You both chose the same!")
        } else if (playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "paper" && computerSelection === "Paper" ){
            console.log("It's A Draw !!You both chose the same!")
        } else if (playerSelection === "Scissors" && computerSelection === "Scissors" || playerSelection === "scissors" && computerSelection === "Scissors" ){
            console.log("It's A Draw !!You both chose the same!")
        } else if (computerSelection === "Rock" && playerSelection === "Scissors" || computerSelection === "Rock" && playerSelection === "scissors"){
            console.log('You lose Computer chose Rock and you chose scissors');
            return ++pc_score;
        } else {
            return "Error! Please enter a valid value! You chose " + playerSelection + " & Computer chose " + computerSelection;
        }
         }
       
        let playerSelection = prompt('Enter Your choice Rock, Paper Or Scissors?')
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
 
      }
      console.log('Your Score is ' + user_score + " And computer's score is " + pc_score);
      if (user_score > pc_score) {
        console.log("Congrats You have won this game against computer");
      } else if (pc_score === user_score) {
        console.log("It's A Draw ! Both of you have scored the same");
      } else {
        console.log("Better try next time you have lost this !");
      }
} 
game()
// NOTE for TMRW - Currently this is working allhamdullilah. Inside of game variable when I am repeating it the scores are reflecting on console the added scores are reflecting on console.
// READ that last point over there that should help figering things out 