// define a variable name userName and set it to an empty string
function eightBallGame() {

let userName = prompt('Enter name');
// create a ternary expression if the user enters a name — like 'Jane' — use string interpolation to log 'Hello,
// Jane!' to the console. Otherwise, simply log Hello!.
userName === true ? document.getElementById('demo').innerHTML = 'hello' + userName + '!' : document.getElementById('demo').innerHTML = 'hello stranger!';
// document.getElementById('demo').innerHTML = 'hello' + userName + '!'
// create a variable name userQuestion and input a question
let userQuestion = prompt('Ask question here...');
// write a console log stating what you asked, you can log user name if you wish
console.log(userQuestion);
// create another variable 'randomNumber' = to Math.floor(Math.random() * 10);
let randomNumber = Math.floor(Math.random() * 8);
// generate a num through 0-10
//create one more var 'eightBall' and equal it to an empty string
let eightBall = '';
// create an if statement utilizing these strings..
switch (randomNumber) {
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4: 
        console.log('Do not count on it');
        break;
    case 5: 
        console.log('My sources say no');
        break;
    case 6: 
        console.log('Outlook not so good');
        break;
    case 7: 
        console.log('Signs point to yes');
        break;
    case 8: 
        console.log('no');
        break;
    case 9: 
        console.log('yes');
        break;
    case 10: 
        console.log('definitely YES');
        break;
}

// 'It is certain'
// 'It is decidedly so'
// 'Reply hazy try again'
// 'Cannot predict now'
// 'Do not count on it'
// 'My sources say no'
// 'Outlook not so good'
// 'Signs point to yes'
console.log(eightBall);

}

// document.getElementById('demo').innerHTML = randomNumber;

// if randomNumber is 0, then save an anwser to eightBall, and so on
// write a console log to print the eightBall value
//console.log(randomNumber);

//  function name() {
//     document.getElementById('demo').innerHTML = eightBallGame();
// }

// window.onload = function() {
//    let myBtn = document.getElementById('btn');
//     myBtn.onclick = name();
// }
