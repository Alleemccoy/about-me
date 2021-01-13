'use strict';

// get the user name and welcome them to site
var userName = prompt('Thank you for gracing my website with your presence, who do I have the pleasure of meeting?');

alert('Hi ' + userName + ', nice to meet you! Time for a mini pop quiz!');

// write 5 questions. They MUST accept yes or no OR y or n in each case
// examples Yes, YES, yes, yEs, yeS, YeS, yES, YEs, Y, y
var questionOne = prompt('Do I live in Bellevue, WA?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(questionOne === 'no' || questionOne === 'n'){
  alert('nope');
}

var questionTwo = prompt('Do I live in Bellevue, WA?').toLowerCase();

if(questionTwo === 'yes' || questionTwo === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert('WRONGO');
}

var questionThree = prompt('').toLowerCase();

if (questionThree ==='yes' || questionThree === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(questionThree === 'no' || questionThree === 'n'){
  alert('incorrect');
}

var questionFour = prompt('').toLowerCase();

if (questionFour ==='yes' || questionFour === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(questionFour === 'no' || questionFour === 'n'){
  alert('incorrect');
}

var questionFive = prompt('').toLowerCase();

if (questionFive ==='yes' || questionFive === 'y') {
  // console.log('you are correct');
  alert('you are correct');
} else if(questionFive === 'no' || questionFive === 'n'){
  alert('incorrect');
}

alert('Thank you for getting to know me,' + userName + '!');