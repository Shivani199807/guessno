'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Answer';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=13;

// document.querySelector('.guess').value=13;

// console.log(document.querySelector('.guess').value);

let number= Math.trunc(Math.random()*20)+1;


let score=20;
document.querySelector('.score').textContent=score;

let highscores=0;
document.querySelector('.highscore').textContent=highscores;


document.querySelector('.check').addEventListener('click',function(){
    const checks= document.querySelector('.guess').value;
    console.log(checks,typeof checks );
    if(!checks){
        document.querySelector('.message').textContent='No number';

    }
    else if(checks==number ){ 
        document.querySelector('.message').textContent='Correct Number';
        
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=number;
        if(score>highscores){
            document.querySelector('.highscore').textContent=score;
        }
    
    
    }

    else if(checks!==number){ 
        document.querySelector('.message').textContent=
        checks>number? 'Too high' :'Too low'
        if(score>0){
            score--
        document.querySelector('.score').textContent=score;}
        
        else{ document.querySelector('.message').textContent="Loss the game";}
      }



   
            
    }    )

    document.querySelector('.again').addEventListener('click',function(){
        
        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('.message').textContent='Start guessing the no.';
        document.querySelector('.guess').value="";
        number= Math.trunc(Math.random()*20)+1;
        document.querySelector('.number').textContent='?';
        document.querySelector('body').style.backgroundColor='brown';
        

    })
