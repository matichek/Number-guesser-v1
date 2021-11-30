

// values
let min = 1,
    max = 1000,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// ui

const game = document.querySelector("#game"),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign ui

minNum.textContent = min;
maxNum.textContent = max;

// play again listen

game.addEventListener('mousedown', function(e) {
  
  if(e.target.className === 'play-again') {
    guessBtn.disabled = false;
    console.log('again');
    
    window.location.reload();
    
  }
});
// listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // validate 

  if(isNaN(guess) || guess < min || guess > max) {

    setMessage(`Please enter a number between ${min} and ${max}`, 'red');

  } 


  // check if won

  if(guess === winningNum) {

    gameOver(true, `${winningNum} is correct, you win!`)

  } else {

    guessesLeft -= 1;

    if(guessesLeft === 0) {
        // loss

        //dis input
       gameOver(false, `Game over. Correct was ${winningNum}`);




    } else {
      // game continues - wrong answer

      guessInput.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
      guessInput.style.borderColor = "red";
    }

  }
})

// game over 

function gameOver(won, msg) {

    let color;

    won === true ? color = 'green' : color = 'red';

    //dis input
    guessInput.disabled = true;
  
    //change border to green
    guessInput.style.borderColor = color;
    message.style.color = color;
    // Set message WON 
    setMessage(msg, color);

    // again?
    guessBtn.value = "Play Again?";
    guessBtn.className += "play-again";
}


function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min)+min)
}