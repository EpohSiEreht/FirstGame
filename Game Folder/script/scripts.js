console.log('testing 123')
// Create ability to play music at 50% volume
function getStarted() {
  var musicB = document.getElementById('battlemusic');
  musicB.setAttribute('src', 'music/battlemusic.mp3');
  musicB.volume=0.5;
  var instructionsText = $('#instructions');
  instructionsText.on('click', function() {
    this.remove();
  });
}

// Create score counter for rock, paper, scissors
var computerScore = 0;
var playerScore = 0;
// Create variable that'll have the score values
var $playerScoreCount = $('#playerScore');
var $computerScoreCount = $('#computerScore');
// Create variables that'll hold the value chosen the user and computer
var $playerChoice = $('#playerChoice');
var $computerChoice = $('#computerChoice');

var monsterLevel = {
  water: 1,
  fire: 1,
  grass: 1
}

var computerMonsterLevel = {
  water: 1,
  fire: 1,
  grass: 1
}

var whoWon;
// Create a function that'll compare chosen values to determine winner
function compare(choice1, choice2) {
  // Random number generator to assign water, grass, or fire as the computers choice
  choice2 = Math.random();
  if(choice2 < 0.33) {
      choice2 = "water";
  } else if (choice2 < 0.66) {
      choice2 = "grass";
  } else {
      choice2 = "fire";
  }
 // Create the ability to show users what has been chosen by the user and computer
  $playerChoice.text(choice1);
  $computerChoice.text(choice2);
  // Create an if statement that uses if, else statements to determine winner and award points to the winner
  if (choice1 === choice2) {
      return false;
  }
  if (choice1 === "water") {
      if (choice2 === "grass") {
          computerScore++;
          whoWon = 2;
      } else if (choice2 === "fire") {
          playerScore++;
          whoWon = 1;
      }
      return updateScores();
  }
  if (choice1 === "fire") {
      if (choice2 === "grass") {
          playerScore++;
          whoWon = 1;
      } else if (choice2 === "water") {
          computerScore++;
          whoWon = 2;
      }
      return updateScores();
  }
  if (choice1 === "grass") {
      if (choice2 === "water") {
          playerScore++;
          whoWon = 1;
      } else if (choice2 === "fire") {
          computerScore++;
          whoWon = 2;
      }
      return updateScores();
  }
}
// Create the ability to update scores while evolving monsters
function updateScores() {
  // Holds the current score value and display on the web page
  $playerScoreCount.text(playerScore);
  $computerScoreCount.text(computerScore);
  // Create variable to determine level of monsters

  // Create if statement to evolve monsters per point
  monsterLevel[$playerChoice.text()];
  computerMonsterLevel[$computerChoice.text()];

  // Evovle player's monsters per point

  if(whoWon === 1 && monsterLevel[$playerChoice.text()] === 3) {
    $('#'+$playerChoice.text()+'A').attr('src', "images/elements/"+$playerChoice.text()+"4.gif");
    $('#'+$playerChoice.text()+'A').attr('width', "150px");
    monsterLevel[$playerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  if(whoWon === 1 && monsterLevel[$playerChoice.text()] === 2) {
    $('#'+$playerChoice.text()+'A').attr('src', "images/elements/"+$playerChoice.text()+"3.gif");
    $('#'+$playerChoice.text()+'A').attr('width', "130px");
    monsterLevel[$playerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  if(whoWon === 1 && monsterLevel[$playerChoice.text()] === 1) {
    $('#'+$playerChoice.text()+'A').attr('src', "images/elements/"+$playerChoice.text()+"2.gif");
    $('#'+$playerChoice.text()+'A').attr('width', "100px");
    monsterLevel[$playerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  else if(playerScore === 4) {
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  else if(whoWon === 1 && playerScore === 5 && computerScore < 5) {
    alert("You won the game!!! Thank you for playing! Click OK to restart the game.");

    // Make sure to refresh page after the game has finished
    location.reload();
  }

  // Evolve computer's monsters per point
  if(whoWon === 2 && computerMonsterLevel[$computerChoice.text()] === 3) {
    $('#'+$computerChoice.text()+'Z').attr('src', "images/computerMonster/"+$computerChoice.text()+"4.gif");
    $('#'+$computerChoice.text()+'Z').attr('width', "150px");
    computerMonsterLevel[$computerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }

  if(whoWon === 2 && computerMonsterLevel[$computerChoice.text()] === 2) {
    $('#'+$computerChoice.text()+'Z').attr('src', "images/computerMonster/"+$computerChoice.text()+"3.gif");
    $('#'+$computerChoice.text()+'Z').attr('width', "110px");
    computerMonsterLevel[$computerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }

  if(whoWon === 2 && computerMonsterLevel[$computerChoice.text()] === 1) {
    $('#'+$computerChoice.text()+'Z').attr('src', "images/computerMonster/"+$computerChoice.text()+"2.gif");
    $('#'+$computerChoice.text()+'Z').attr('width', "100px");
    computerMonsterLevel[$computerChoice.text()]++;
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  else if(computerScore === 4) {
    $('#levelup').attr('src', 'music/levelup.mp3');
  }
  else if(whoWon = 2 && computerScore === 5 && playerScore < 5) {
    alert("You lost... Better luck next time. Click OK to restart the game.");
    // Make sure to refresh the page after the game has finished
    location.reload();
  }
}
