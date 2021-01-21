'use strict';

var score = 0;

// get the user name and welcome them to site
var userName = prompt('Thank you for gracing my website with your presence, who do I have the pleasure of meeting?');

alert('Hi ' + userName + ', nice to meet you! Time for a mini pop quiz!');

// write 5 questions. They MUST accept yes or no OR y or n in each case
// examples Yes, YES, yes, yEs, yeS, YeS, yES, YEs, Y, y

// question

function questionOne(name) {
  var answerOne = prompt('Is my name ' + name + ' ?').toLowerCase();

  if (answerOne === 'yes' || answerOne === 'y') {
    // console.log('you are correct');
    alert('you are correct');
    score++;
  } else if (answerOne === 'no' || answerOne === 'n') {
    alert('nope');
  }
}
questionOne('Allee Mccoy');

//question 2

function questionTwo(location) {
  var answerTwo = prompt('Do I live in ' + location + ' ?').toLowerCase();

  if (answerTwo === 'no' || answerTwo === 'n') {
    // console.log('you are correct');
    alert('you are correct');
    score++;
  } else if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('WRONGO');
  }
}
questionTwo('Seatle, Wa');

//question 3

function questionThree(travel) {
  var answerThree = prompt('Do I love to ' + travel + ' ?').toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    // console.log('Of course I do!);
    score++;
    alert('Of course I do!');
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Are you kidding me? Of course I love to travel!');
  }
}
questionThree('travel');

//question 4
function questionFour(kids) {
  var answerFour = prompt('Do I have ' + kids + ' ?').toLowerCase();

  if (answerFour === 'no' || answerFour === 'n') {
    // console.log('you are correct');
    alert('you are correct');
    score++;
  } else if (answerFour === 'yes' || answerFour === 'y') {
    alert('incorrect');
  }
}
questionFour('children');


//question 5
function questionFive(comedian) {
  var answerFive = prompt('Am I the ' + comedian + ' person you know?').toLowerCase();

  if (answerFive === 'yes' || answerFive === 'y') {
    // console.log('Of course I am!');
    alert('Of course I am!');
    score++;
  } else if (answerFive === 'no' || answerFive === 'n') {
    alert('Incorrect, please try again...');
  }
}
questionFive('funniest');


// My question 6
function questionSix(myAge) {
  var loopNumber = 4
  var age = 30;
  for (var i = 0; i < loopNumber; i++) {
    var guessMyAge = parseInt(prompt('How ' + myAge + ' do you think I am?'));
    //direct hit
    if (guessMyAge === age) {
      alert('You are correct!');
      score++;
      break;
    } else if (guessMyAge > age) {
      alert('Lower Please!');
    } else if (guessMyAge < age) {
      alert('Higher Please!');
    }
    if (i === loopNumber - 1) {
      alert('Sorry, you are out of guesses! My actual age is 30')
    }
  }
}
questionSix('old');


// New - question 7
function questionSeven(favAnimals) {
  var answerCorrectly = false;
  var NumberOfGuesses = 6;
  var myFavoriteAnimals = ['cat', 'bear', 'otter', 'whale', 'bat', 'zebra'];
  //console.log(myFavoriteAnimals)
  for (var i = 0; i < 6; i++) {
    var guessMyFavorites = prompt(`What are my favorite ${favAnimals}? You get ${NumberOfGuesses - i} guesses!`).toLowerCase();
    for (var j = 0; j < myFavoriteAnimals.length; j++) {
      if (guessMyFavorites === myFavoriteAnimals[j]) {
        alert(`Correct, one of my favorite animals is a ${myFavoriteAnimals[j]}`);
        score++;
        answerCorrectly = true;
        score++;
        break;
      }
    }
    if (answerCorrectly) {
      break;
    }
  }
  if (i === NumberOfGuesses || answerCorrectly) {
    alert(`My favorites animals are ${myFavoriteAnimals}`);
  }
}
questionSeven('animals');

// numberOfGuesses--;
console.log(score);

alert('You scored ' + score + ' points!')

alert('Thank you for getting to know me, ' + userName + '!');