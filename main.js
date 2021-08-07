const display_element = document.querySelector("#display")
let display_value = display_element.value
let realValue = undefined
let isDecimal = false
let isOperator = false

function add(a,b){
    return a + b
}

function substract(a,b){
    return a-b
}

function multiply(a,b){
    return(a,b)
}

function divide(a,b){
    if(b == 0){
        return NaN
    }
    return a/b
}

function operate(a,b,oper){
    switch(oper){
        case '+':
            return add(a,b)
            break
        case '-':
            return substract(a,b)
            break
        case '*':
            return multiply(a,b)
            break
        case '/':
            return divide(a,b)
            break
    }
}

function display(num){
    if(display_element.value == "0" && num != 0){
        break
    }
    display_element.setAttribute("value", num.toString())
}

function main(){
    for(let i=0; i<10; i++){
        let button = document.querySelector("#" + i + "_calc")
        button.addEventListener("click") = function(){
            if(realValue.charAt(realValue.length -1) == '+' || realValue.charAt(realValue.length -1) == '-' || realValue.charAt(realValue.length -1) == '*' || realValue.charAt(realValue.length -1) == '/'){
                clear_display()
                display_value = button.textContent
                realValue += button.textContent
                display_element.setAttribute("value", display_value)
            }
            else if(display_element.value == '0' && button.textContent == '0'){

            }
            else if(isDecimal == false && display_element.value == '0'){
                display_value = button.textContent
                realValue
                display_element.setAttribute("value", display_value)
            }
            else
                display_value += button.textContent
                realValue += button.textContent
                display_element.setAttribute("value", display_value)

        }
    }

    let equal_button = document.querySelector("#equal_calc")
    let add_button = document.querySelector("#add_calc")
    let minus_button = document.querySelector("#minus_calc")
    let divide_button = document.querySelector("#divide_calc")
    let multiply_button = document.querySelector("#multiply_calc")
    let clear_button = document.querySelector("#clear_calc")
    let dot_button = document.querySelector("#dot_calc")

    add_button.addEventListener("click", function(){
        addOperator(add_button)
    })

    minus_button.addEventListener("click", function(){
        addOperator(minus_button)
    })

    multiply_button.addEventListener("click", function(){
        addOperator(multiply_button)
    })

    divide_button.addEventListener("click", function(){
        addOperator(divide_button)
    })

    clear_button.addEventListener("click", function(){
        clear()
    })

    equal_button.addEventListener("click", function(){
        checkIfEquationFull(realValue)
    })

    dot_button.addEventListener("click", function(){
        makeDecimal(realValue)
    })
}

function makeMath(equation){
    let a = undefined
    let oper = undefined
    let b = undefined
    for(let i=0; i<equation.length;i++)
    {
        if(equation.charAt(i) == '+' || equation.charAt(i) == '-' || equation.charAt(i) == '*' || equation.charAt(i) == '/'){
            oper = equation.charAt(i)
            a = equation.substring(0, i)
            b = equation.substring(i+1)
            break
        }
    }
    finalValue = operate(a,b,operator)
    display(finalValue)
}

function clear(){
    clear_display()
    display_value = '0'
    display_element.value = display_value
    realValue = display_value
    isDecimal = false
}

function addOperator(button_operator){
    //change operator if already pressed
    if(realValue.charAt(realValue.length-1) == '+' || realValue.charAt(realValue.length-1) == '-' ||  realValue.charAt(realValue.length-1) == '*' || realValue.charAt(realValue.length-1) == '/'){
        realValue.replace(/.$/,button_operator.textContent)
        isDecimal = false
    }

    else if(isOperator==true && realValue.charAt(realValue.length-1).isInteger){
        checkIfEquationFull(realValue)
        clear_display()
        isDecimal = false

    }
    else if(realValue == ''){

    }
    else{
        realValue += operator
    }
}

function clear_display(){
    display_value = ""
    display_element.value = display_value
}

function checkIfEquationFull(equation){
    for(let i=0;i<equation.length; i++){
        if(equation.charAt(i) == '+' || equation.charAt(i) == '-' || equation.charAt(i) == '*' || equation.charAt(i) == '/'){
            if(equation.charAt(i-1).isInteger && equation.charAt(i+1).isInteger){
                makeMath(equation)
            }
        }
    }
}

function makeDecimal(realValue){
    if(realValue.charAt(realValue.length-1) == '+' || realValue.charAt(realValue.length-1) == '-' || realValue.charAt(realValue.length-1) == '*' || realValue.charAt(realValue.length-1) == '/'){
        realValue += '0.'
        clear_display()
        display_value = '0.'
        display_element.value = display_value
    }

    else if(realValue == ''){
        realValue += '0.'
        clear_display()
        display_value = '0.'
        display_element.setAttribute('value', display_value)
    }
    else{
        realValue += '.'
        display_value += '.'
        display_element.setAttribute('value', display_value)
    }
}

main()