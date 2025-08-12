let firstnumber="";
let secondnumber="";
let operator="";

function append(number){
    playSound();
    if (operator === "") {
        firstnumber += number;
        document.getElementById("res").value = firstnumber;
    } else {
        secondnumber += number;
        document.getElementById("res").value = firstnumber+operator+secondnumber;
    }
}
function operate(op){
    playSound();
    operator = op;
     document.getElementById("res").value = firstnumber+operator;
}
function calculate(){
    playSound();
    let result;
    
      switch(operator){
        case '+':
            result = parseInt(firstnumber) + parseInt(secondnumber);
            break;
        case '-':
            result = parseInt(firstnumber) - parseInt(secondnumber);
            break;
        case '*':
            result = parseInt(firstnumber) * parseInt(secondnumber);
            break;
        case '/':
            result = parseInt(firstnumber) / parseInt(secondnumber);
            break;
    }
    document.getElementById('res').value = result;
}
function clearresult(){
    playSound();
    firstnumber = "";
    secondnumber = "";
    operator = "";
    document.getElementById("res").value = "";
}
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

let clickSound=new Audio("water msg tone.mp3");
function playSound(){
    clickSound.currentTime=0;
    clickSound.play();
}


