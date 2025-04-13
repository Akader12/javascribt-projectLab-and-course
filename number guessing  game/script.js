const msg1 = document.getElementById('message1');
const msg2 = document.getElementById('message2');
const msg3 = document.getElementById('message3');

let answer = Math.floor(Math.random()*100) +1;
let no_of_guesses = 0;
let guessed_num = [];

function play(){
    let user_guess = Number(document.getElementById('guess').value);
    if(user_guess <1 || user_guess > 100){
        alert('please enter a number between 1 and 100');
    }
    else{
        guessed_num.push(user_guess);
        no_of_guesses+=1;
        
        if(user_guess < answer){
            msg1.textContent = 'Your Guess is too low';
            msg2.textContent = 'No. of guesses: ' + no_of_guesses;
            msg3.textContent = 'Guess Number are: '+ guessed_num
        }
        else if(user_guess > answer){
            msg1.textContent = 'Your Guess is too high';
            msg2.textContent = 'No. of guesses: ' + no_of_guesses;
            msg3.textContent = 'Guess Number are: '+ guessed_num
        }else if(user_guess == answer){
            msg1.textContent = 'Yippie You Win!!';
            msg2.textContent = 'The number was: '+answer;
            msg3.textContent = 'You guesse it in '+no_of_guesses + 'guesses';
            // document.getElementById('my_btn').disabled = true
            answer = Math.floor(Math.random()*100) +1;
        }
    }
    console.log(answer)
}