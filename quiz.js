const quizForm = document.querySelector('.quiz-form')
const sumbitButton = document.querySelector('#submit-answer') 
const output = document.querySelector('#output')


const correctAnswers = ["3","Pythagoras","The longest side of triangle"]

function calculateScore(){
    let score = 0;
    let i = 0;
    const data = new FormData(quizForm)
    for(let value of data.values()){
     if(value===correctAnswers[i]){
         score++
        }
        i++
    }
    console.log(score)
    output.innerText =" Your score is "+ score
    
}

sumbitButton.addEventListener('click',calculateScore)