const sides = document.querySelectorAll(".sides")
const calculateBtn = document.querySelector('#calculate-btn')
const output = document.querySelector('.output')

function area(b,h){
    let sum = (b*h)/2
    return sum
}

function calculateArea(){
    let s1 = Number(sides[0].value)
    let s2 = Number(sides[1].value)
    let areaOfTriangle = area(s1,s2)
    output.textContent= "Area of triangle is " + areaOfTriangle
}

calculateBtn.addEventListener('click',calculateArea)