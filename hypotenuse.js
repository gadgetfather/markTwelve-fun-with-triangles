const sides = document.querySelectorAll('.side-input')
const hypotenuseBtn = document.querySelector('#hypotenuse-btn')
const output = document.querySelector('#output')


function calculateSumOfSquares(a,b){
    let sum = a*a+b*b;
     return sum;
    
}

function calculateHypo(){
    let s1 = Number(sides[0].value)
    let s2 = Number(sides[1].value)
    let sumOfSquare=calculateSumOfSquares(s1,s2)
    console.log(sumOfSquare)

    const lengthOfHypotenuse = Math.sqrt(sumOfSquare)
    output.textContent = "Length of hypotenuse is "+ lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypo)