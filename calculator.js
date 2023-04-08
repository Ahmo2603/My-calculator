var resultField = document.querySelector(".result_field");
var equationField = document.querySelector(".equation_field");
equationField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;"
var fetchedInputNumber = "";
var firstFetchedInput = "";
var firstFetchedInputNumber = "";
var equation = "";


function zeroNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 0;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function oneNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 1;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function twoNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 2;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function threeNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 3;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function fourNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 4;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function fiveNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 5;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function sixNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 6;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function sevenNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 7;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function eightNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 8;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function nineNumberInput() {
    resultField.innerHTML = resultField.innerHTML + 9;
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function addingDecimalPoint() {
    resultField.innerHTML = resultField.innerHTML + ".";
    resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    var fetchedInput = $(".result_field").text();
    fetchedInputNumber = parseFloat(fetchedInput);
}

function clearingEntry() {
    resultField.innerHTML = "";
    equationField.innerHTML = "";
    let fetchedInput = "";
    fetchedInputNumber = "";
}

function addition() {
    if(resultField.innerHTML == "") {
        alert("You have to enter a number before you can do a mathematical operation!");
    } else {
        firstFetchedInput = $(".result_field").text();
        firstFetchedInputNumber = parseFloat(firstFetchedInput);
        equation = document.createElement("div");
        equation.className = "equation";
        equation.innerHTML = "+";
        $(".equation_field").append(equation);
        resultField.innerHTML = "";
    }
}

function subtraction() {
    if(equationField.children.length > 0) {
        resultField.innerHTML = "-" + fetchedInputNumber;
        resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    } else {
        resultField.innerHTML = fetchedInputNumber;
        resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
    } 
    if(equationField.children.length > 2) {
        alert("You can not add more than one subtraction symbol per number!");
        return;
    } else {
        firstFetchedInput = $(".result_field").text();
        firstFetchedInputNumber = parseFloat(firstFetchedInput);
        equation = document.createElement("div");
        equation.className = "equation";
        equation.innerHTML = "-";
        $(".equation_field").append(equation);
        resultField.innerHTML = "";
    }
}

function multiplication() {
    if(resultField.innerHTML == "") {
        alert("You have to enter a number before you can do a mathematical operation!");
    } else {
        firstFetchedInput = $(".result_field").text();
        firstFetchedInputNumber = parseFloat(firstFetchedInput);
        equation = document.createElement("div");
        equation.className = "equation";
        equation.innerHTML = "×";
        $(".equation_field").append(equation);
        resultField.innerHTML = "";
    }
}

function division() {
    if(resultField.innerHTML == "") {
        alert("You have to enter a number before you can do a mathematical operation!");
    } else {
        firstFetchedInput = $(".result_field").text();
        firstFetchedInputNumber = parseFloat(firstFetchedInput);
        equation = document.createElement("div");
        equation.className = "equation";
        equation.innerHTML = "/";
        $(".equation_field").append(equation);
        resultField.innerHTML = "";
    }
}

function equals() {
    equation = document.querySelector(".equation").innerHTML;
    if(equationField.children.length == 1) {
        if(equation.includes('+')) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            var addition = firstFetchedInputNumber + secondFetchedInputNumber;
            resultField.innerHTML = addition;
            $(".equation").html(firstFetchedInputNumber + "+" + secondFetchedInputNumber + "=");
        } else if(equation.includes('-')) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            var subtraction = firstFetchedInputNumber - secondFetchedInputNumber;
            resultField.innerHTML = subtraction;
            $(".equation").html(firstFetchedInputNumber + "-" + secondFetchedInputNumber + "=");
        } else if(equation.includes("×")) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            var multiplication = firstFetchedInputNumber * secondFetchedInputNumber;
            resultField.innerHTML = multiplication;
            $(".equation").html(firstFetchedInputNumber + "×" + secondFetchedInputNumber + "=");
        } else if(equation.includes("/")) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            if(secondFetchedInputNumber == 0) {
                alert("You can not divide with 0!");
                return;
            }
            var division = firstFetchedInputNumber / secondFetchedInputNumber;
            resultField.innerHTML = division;
            $(".equation").html(firstFetchedInputNumber + "/" + secondFetchedInputNumber + "=");
        }
    } else if(equationField.children.length > 1) {
        if((equationField.firstChild.innerHTML.includes('-') && equationField.children[1].innerHTML.includes('/') && equationField.lastChild.innerHTML.includes('-'))) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            secondFetchedInputNumber = -Math.abs(secondFetchedInputNumber);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var divisionSpecial = firstFetchedInputNumber / secondFetchedInputNumber;
            resultField.innerHTML = divisionSpecial;
            $(".equation").html(firstFetchedInputNumber + "/" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
            equationField.firstChild.style = "display: none;";
            return;
        } if((equationField.firstChild.innerHTML.includes('-') && equationField.children[1].innerHTML.includes('×') && equationField.lastChild.innerHTML.includes('-'))) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            secondFetchedInputNumber = -Math.abs(secondFetchedInputNumber);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var multiplicationSpecial = firstFetchedInputNumber * secondFetchedInputNumber;
            resultField.innerHTML = multiplicationSpecial;
            $(".equation").html(firstFetchedInputNumber + "×" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
            equationField.firstChild.style = "display: none;";
        } else if(equationField.firstChild.innerHTML.includes('-') && equationField.lastChild.innerHTML.includes('-')) {
            var secondFetchedInput = $(".result_field").text();
            secondFetchedInputNumber = "-" + secondFetchedInputNumber;
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var subtraction = firstFetchedInputNumber - secondFetchedInputNumber;
            resultField.innerHTML = subtraction;
            $(".equation").html(firstFetchedInputNumber + "-" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        } else if(equationField.firstChild.innerHTML.includes('-') && equationField.lastChild.innerHTML.includes('+')) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = "-" + firstFetchedInputNumber;
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var additionSpecial = firstFetchedInputNumber + secondFetchedInputNumber;
            resultField.innerHTML = additionSpecial;
            $(".equation").html(firstFetchedInputNumber + "+" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        } else if((equationField.firstChild.innerHTML.includes('-') && equationField.lastChild.innerHTML.includes('×'))) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = "-" + firstFetchedInputNumber;
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var multiplicationSpecial = firstFetchedInputNumber * secondFetchedInputNumber;
            resultField.innerHTML = multiplicationSpecial;
            $(".equation").html(firstFetchedInputNumber + "×" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        } else if (equationField.firstChild.innerHTML.includes('×') && equationField.lastChild.innerHTML.includes('-')) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            secondFetchedInputNumber = "-" + secondFetchedInputNumber;
            secondFetchedInputNumber = parseFloat(secondFetchedInputNumber);
            firstFetchedInputNumber = Math.abs(firstFetchedInputNumber);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            var multiplicationSpecial = firstFetchedInputNumber * secondFetchedInputNumber;
            resultField.innerHTML = multiplicationSpecial;
            $(".equation").html(firstFetchedInputNumber + "×" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        } else if((equationField.firstChild.innerHTML.includes('-') && equationField.lastChild.innerHTML.includes('/'))) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            if(secondFetchedInputNumber == 0) {
                alert("You can not divide with 0!");
                return;
            }
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = "-" + firstFetchedInputNumber;
            firstFetchedInputNumber = parseFloat(firstFetchedInputNumber);
            var divisionSpecial = firstFetchedInputNumber / secondFetchedInputNumber;
            resultField.innerHTML = divisionSpecial;
            $(".equation").html(firstFetchedInputNumber + "/" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        }  else if(equationField.firstChild.innerHTML.includes('/') && equationField.lastChild.innerHTML.includes('-')) {
            var secondFetchedInput = $(".result_field").text();
            var secondFetchedInputNumber = parseFloat(secondFetchedInput);
            secondFetchedInputNumber = "-" + secondFetchedInputNumber;
            secondFetchedInputNumber = parseFloat(secondFetchedInputNumber);
            resultField.innerHTML = "-" + fetchedInputNumber;
            resultField.style = "font-size: 50px; display: flex; justify-content: center; flex-direction: column;";
            firstFetchedInputNumber = Math.abs(firstFetchedInputNumber);
            var divisionSpecial = firstFetchedInputNumber / secondFetchedInputNumber;
            resultField.innerHTML = divisionSpecial;
            $(".equation").html(firstFetchedInputNumber + "/" + secondFetchedInputNumber + "=");
            equationField.lastChild.style = "display: none;";
        } 
    } 
}