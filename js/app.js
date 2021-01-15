'use strict';

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

alert('Thank you for getting to know me, ' + userName + '!');