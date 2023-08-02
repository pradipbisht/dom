let randomNumber=(Math.floor(Math.random()*100));
// console.log(randomNumber)
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')

const loworHi=document.querySelector('.lowOrHi');

const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess >100){
        alert('please enter no. below 100')
    } else {
        prevGuess.push(guess)
        if(numGuess ===11){
            displayGuess(guess);
            displayMessage(`game over.random no. was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess ===randomNumber){
        displayMessage(`your are right`)
    }else if (guess <= randomNumber) {
        displayMessage(`number is low`)
    }else if(guess =>randomNumber) {
        displayMessage(`number is high`)
    }
}
 
function displayGuess(guess){
    userInput.value=''
    guessslot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message) {
    loworHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame() {
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame()
}

function newGame(){
    const newgamebutton=document.querySelector('#newGame');
    newgamebutton.addEventListener('click',function(e){
        randomNumber=(Math.floor(Math.random()*100));
        prevGuess=[];
        numGuess=1;
        guessslot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}








