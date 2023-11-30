/*create  event handling for each button*/
const on = document.getElementById('on')
const add = document.getElementById('+')
const subtract = document.getElementById('-')
const multiply = document.getElementById('*')
const divide = document.getElementById('÷')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eigth = document.getElementById('8')
const nine = document.getElementById('9')
const zero = document.getElementById('0')
const equal = document.getElementById('=')
on.addEventListener('click', handleonoff)
add.addEventListener('click', handleoperation)
subtract.addEventListener('click', handleoperation)
multiply.addEventListener('click', handleoperation)
divide.addEventListener('click', handleoperation)
one.addEventListener('click', handlenumber)
two.addEventListener('click', handlenumber)
three.addEventListener('click', handlenumber)
four.addEventListener('click', handlenumber)
five.addEventListener('click', handlenumber)
six.addEventListener('click', handlenumber)
seven.addEventListener('click', handlenumber)
eight.addEventListener('click', handlenumber)
nine.addEventListener('click', handlenumber)
zero.addEventListener('click', handlenumber)
on = false

function handlenumber() {
    const number = this.
    currentvalue += number
    updatedisplay()

}

function handleoperation() {
    const operation = this.textContent
    currentvalue += operation
    updatedisplay()

}

function handleonoff() {
    const on = !this.on
    if (on == true) {
        currentvalue = ''
    } else {
        currentvalue = 0
    }
    updatedisplay()
}

function updatedisplay() {
    const display = document.getElementById(display)
    display.value = currentvalue
}