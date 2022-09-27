

function eightBallGame() {
let userName = prompt('Enter name');

document.getElementById('demo').innerHTML = `Hello ${userName}!`;

let userQuestion = prompt('Ask question here...');
let randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
    case 0:
        return 'It is certain';
    case 1:
        return 'It is decidedly so';
    case 2:
        return 'Reply hazy try again';
    case 3:
        return 'Cannot predict now';
    case 4: 
        return 'Do not count on it';
    case 5: 
        return 'My sources say no';
    case 6: 
        return 'Outlook not so good';
    case 7: 
        return 'Signs point to yes';
    
    }   
}

window.onload = function() {
    document.getElementById('answer').innerHTML = eightBallGame();
}
