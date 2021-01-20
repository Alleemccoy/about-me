'use strict';

//New here
var score = 0

// get the user name and welcome them to site
var userName = prompt('Thank you for gracing my website with your presence, who do I have the pleasure of meeting?');

alert('Hi ' + userName + ', nice to meet you! Time for a mini pop quiz!');

// write 5 questions. They MUST accept yes or no OR y or n in each case
// examples Yes, YES, yes, yEs, yeS, YeS, yES, YEs, Y, y
var answerOne = prompt('Is my name Allee McCoy?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('nope');
}

var answerTwo = prompt('Do I live in Seattle, WA?').toLowerCase();

if(answerTwo === 'no' || answerTwo === 'n') {
  // console.log('you are correct');
  alert('you are correct');
} else if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('WRONGO');
}

var answerThree = prompt('Do I love to travel?').toLowerCase();

if (answerThree ==='yes' || answerThree === 'y') {
  // console.log('Of course I do!);
  alert('Of course I do!');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('Are you kidding me? Of course I love to travel!');
}

var answerFour = prompt('Do I have children?').toLowerCase();

if (answerFour ==='no' || answerFour === 'n') {
  // console.log('you are correct');
  alert('you are correct');
} else if(answerFour === 'yes' || answerFour === 'y'){
  alert('incorrect');
}

var answerFive = prompt('Am I the funniest person you know?').toLowerCase();

if (answerFive ==='yes' || answerFive === 'y') {
  // console.log('Of course I am!');
  alert('Of course I am!');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('Incorrect, please try again...');
}
// My question 6






// Below is just an example
// New - question 6
for (var i = 0; i < 4 ; i++) {
  var guessMyAge = +prompt('How old do you think I am? You get 4 guessed!');
  var age = 40;
  if (guessMyAge === age) {
    alert('You are correct!');
    score++;
    break;
  } else if (i < 3 && guessMyAge < age) {
    alert('Ah not that old! Lower please!');
  }else if (i === 3) {
    alert('Sorry youre out of guesses. I am 40.');
  }


// New - question 7
  var answerCorrectly = false;
  var NumberOfGuesses = 6;
  var myFavoriteAnimals = ['cat', 'dog', 'bat', 'eagel'];
  //console.log(myFavoriteAnimals);
  for (var j = 0; j < 6; j++) {
    var guessMyFavorites = prompt(`What are my favorite animals? You get ${NumberOfGuesses - j} guesses!`).toLowerCase();
    for (var k = 0; k < myFavoriteAnimals.length; k++) {
      if (guessMyFavorites === myFavoriteAnimals[k]) {
        alert('Correct');
        answerCorrectly = true;
        score++;
        break;
      }
    }
    if (answerCorrectly) {
      break;
    }
    // numberOfGuesses--;
  }

alert('My favorites animals are...');
console.log(score);

}


// Above is an example, mine is below





alert('Thank you for getting to know me, ' + userName + '!');