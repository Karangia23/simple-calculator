const display_element = document.querySelector("#display")
let display_value = display_element.value
let realValue = display_value
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
        
    }
    display_element.setAttribute("value", num.toString())
}

function main(){
    for(let i=0; i<10; i++){
        let button = document.querySelector("#calc_" + i.toString())
        button.addEventListener("click", function(){
            if(realValue.charAt(realValue.length -1) == '+' || realValue.charAt(realValue.length -1) == '-' || realValue.charAt(realValue.length -1) == '*' || realValue.charAt(realValue.length -1) == '/'){
                clear_display()
                display_value = button.textContent
                realValue += button.textContent
                display_element.value = display_value
                //display_element.setAttribute("value", display_value)
            }
            else if(display_element.value == '0' && button.textContent == '0' && isDecimal == false){

            }
            else if(isDecimal == false && display_element.value == '0'){
                display_value = button.textContent
                realValue = button.textContent
                display_element.value = display_value
            }
            else if(realValue == 'NaN'){

            }
            else
            {
                display_value += button.textContent
                realValue += button.textContent
                display_element.value = display_value
            }         
        })
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
        let lastEquationDigit = realValue.charAt(realValue.length-1)
        if(isOperator != false && isNumeric(lastEquationDigit))
        {
            realValue = makeMath(realValue)
            isOperator = false
            display_value = realValue
            display_element.value = display_value
        }
    })

    dot_button.addEventListener("click", function(){
        makeDecimal(realValue)
    })
}

function makeMath(equation){
    let a = 0
    let oper = ''
    let b = 0
    if(realValue != NaN){
        let lastEquationDigit = equation.charAt(equation.length-1)
        for(let i=0; i<equation.length;i++)
        {
            if((equation.charAt(i) == '+' || equation.charAt(i) == '-' || equation.charAt(i) == '*' || equation.charAt(i) == '/')&& isNumeric(lastEquationDigit)){
                oper = equation.charAt(i)
                a = Number(equation.substring(0, i))
                b = Number(equation.substring(i+1))
                equation = operate(a,b,oper)
                return String(equation)
                break
            }
        }
        
    }
}

function clear(){
    clear_display()
    display_value = '0'
    display_element.value = display_value
    realValue = display_value
    isDecimal = false
    isOperator = false
}

function addOperator(button_operator){
    let lastEquationDigit = realValue.charAt(realValue.length-1)
    //change operator if already pressed
    if(realValue.charAt(realValue.length-1) == '+' || realValue.charAt(realValue.length-1) == '-' ||  realValue.charAt(realValue.length-1) == '*' || realValue.charAt(realValue.length-1) == '/'){
        realValue.replace(/.$/,button_operator.textContent)
        isDecimal = false
    }

    else if(isOperator==true && isNumeric(lastEquationDigit)){
        clear_display()
        realValue = makeMath(realValue)
        display_value = realValue
        display_element.value = display_value
        isDecimal = false

    }
    else if(realValue == ''){

    }
    else{
        realValue += button_operator.textContent
        isOperator = true
        isDecimal = false
    }
}

function clear_display(){
    display_value = ""
    display_element.value = display_value
}


function makeDecimal(){
    if(realValue.charAt(realValue.length-1) == '+' || realValue.charAt(realValue.length-1) == '-' || realValue.charAt(realValue.length-1) == '*' || realValue.charAt(realValue.length-1) == '/'){
        realValue += '0.'
        clear_display()
        isDecimal = true
        display_value = '0.'
        display_element.value = display_value
    }

    else if(isDecimal == true){
    
    }

    else if(realValue == ''){
        realValue += '0.'
        isDecimal = true
        clear_display()
        display_value = '0.'
        display_element.value = display_value
    }
    else{
        realValue = realValue + "."
        display_value += '.'
        isDecimal = true
        display_element.value = display_value
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

main()