console.log('testing 123')
// Create ability to play music at 50% volume
function battleMusic() {
  var musicB = document.getElementById('battlemusic');
  musicB.setAttribute('src', 'music/battlemusic.mp3');
  musicB.volume=0.5;
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
      } else if (choice2 === "fire") {
          playerScore++;
      }
      return updateScores();
  }
  if (choice1 === "fire") {
      if (choice2 === "grass") {
          playerScore++;
      } else if (choice2 === "water") {
          computerScore++;
      }
      return updateScores();
  }
  if (choice1 === "grass") {
      if (choice2 === "water") {
          playerScore++;
      } else if (choice2 === "fire") {
          computerScore++;
      }
      return updateScores();
  }
}
// Create the ability to update scores while evolving monsters
function updateScores() {
  // Holds the current score value and display on the web page
  $playerScoreCount.text(playerScore);
  $computerScoreCount.text(computerScore);
  // Create if statement to evolve monsters per point
  if(playerScore === 1) {
    $('#waterA').attr('src', "images/elements/water2.gif");
    $('#waterA').attr('width', "100px");
    $('#grassA').attr('src', "images/elements/grass2.gif");
    $('#grassA').attr('width', "110px");
    $('#fireA').attr('src', "images/elements/fire2.gif");
    $('#fireA').attr('width', "130px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(playerScore === 2) {
    $('#waterA').attr('src', "images/elements/water3.gif");
    $('#waterA').attr('width', "110px");
    $('#grassA').attr('src', "images/elements/grass3.gif");
    $('#grassA').attr('width', "120px");
    $('#fireA').attr('src', "images/elements/fire3.gif");
    $('#fireA').attr('width', "120px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(playerScore === 3) {
    $('#waterA').attr('src', "images/elements/water4.gif");
    $('#waterA').attr('width', "110px");
    $('#grassA').attr('src', "images/elements/grass4.gif");
    $('#grassA').attr('width', "130px");
    $('#fireA').attr('src', "images/elements/fire4.gif");
    $('#fireA').attr('width', "200px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(playerScore === 4) {
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(playerScore === 5 && computerScore < 5) {
    alert("You won the game!!! Thank you for playing! Click OK to restart the game.");
    // Make sure to refresh page after the game has finished
    location.reload();
  }
  // Evolve computer's monsters per point
  if(computerScore === 1) {
    $('#blueB').attr('src', "images/computerMonster/water2.gif");
    $('#blueB').attr('width', "90px");
    $('#greenB').attr('src', "images/computerMonster/grass2.gif");
    $('#greenB').attr('width', "100px");
    $('#redB').attr('src', "images/computerMonster/fire2.gif");
    $('#redB').attr('width', "120px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(computerScore === 2) {
    $('#blueB').attr('src', "images/computerMonster/water3.gif");
    $('#blueB').attr('width', "120px");
    $('#greenB').attr('src', "images/computerMonster/grass3.gif");
    $('#greenB').attr('width', "110px");
    $('#redB').attr('src', "images/computerMonster/fire3.gif");
    $('#redB').attr('width', "100px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(computerScore === 3) {
    $('#blueB').attr('src', "images/computerMonster/water4.gif");
    $('#blueB').attr('width', "120px");
    $('#greenB').attr('src', "images/computerMonster/grass4.gif");
    $('#greenB').attr('width', "100px");
    $('#redB').attr('src', "images/computerMonster/fire4.gif");
    $('#redB').attr('width', "150px");
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(computerScore === 4) {
    $('#levelup').attr('src', 'music/levelup.mp3');
  } else if(computerScore === 5 && playerScore < 5) {
    alert("You lost... Better luck next time. Click OK to restart the game.");
    // Make sure to refresh the page after the game has finished
    location.reload();
  }
}
