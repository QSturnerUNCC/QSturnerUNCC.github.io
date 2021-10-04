let calculatorText = "";
let calculationResult = undefined;
let parsedNumber1 = undefined;
let parsedNumber2 = undefined;

function enterDecimal() {
    calculatorText += ".";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterMultiplication() {
    if(isNotADecimal(calculatorText)) {
        parsedNumber1 = parseInt(calculatorText);
    } else {
        parsedNumber1 = parseFloat(calculatorText);
    }
    
    calculatorText += "*";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterDivision() {
    if(isNotADecimal(calculatorText)) {
        parsedNumber1 = parseInt(calculatorText);
    } else {
        parsedNumber1 = parseFloat(calculatorText);
    }

    calculatorText += "/";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterSubtraction() {
    if(isNotADecimal(calculatorText)) {
        parsedNumber1 = parseInt(calculatorText);
    } else {
        parsedNumber1 = parseFloat(calculatorText);
    }

    calculatorText += "-";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterAddition() {
    if(isNotADecimal(calculatorText)) {
        parsedNumber1 = parseInt(calculatorText);
    } else {
        parsedNumber1 = parseFloat(calculatorText);
    }

    calculatorText += "+";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterEquals() {
    if (parsedNumber2 == undefined && parsedNumber1 != undefined) {
        let substringParsedNumber2 = "";
        
        if (calculatorText.indexOf("+") !== -1) {
            substringParsedNumber2 = calculatorText.substring(calculatorText.indexOf("+") + 1, calculatorText.length);
        } else if (calculatorText.indexOf("-") !== -1) {
            substringParsedNumber2 = calculatorText.substring(calculatorText.indexOf("-") + 1, calculatorText.length);
        } else if (calculatorText.indexOf("*") !== -1) {
            substringParsedNumber2 = calculatorText.substring(calculatorText.indexOf("*") + 1, calculatorText.length);
        } else {
            substringParsedNumber2 = calculatorText.substring(calculatorText.indexOf("/") + 1, calculatorText.length);
        }

        if (substringParsedNumber2.indexOf(".") !== -1) {
            parsedNumber2 = parseFloat(substringParsedNumber2);
        } else {
            parsedNumber2 = parseInt(substringParsedNumber2);
        }
    } else {
        if(isNotADecimal(calculatorText)) {
            parsedNumber1 = parseInt(calculatorText);
        } else {
            parsedNumber1 = parseFloat(parsedNumber1);
        }
    }

    if (parsedNumber1 != undefined && parsedNumber2 != undefined) {
        switch(readExpression()) {
            case "addition":
                calculationResult = parsedNumber1 + parsedNumber2;
                calculatorText += "=" + calculationResult;
                document.getElementById("display").innerHTML = calculatorText;
                break;
            case "division":
                calculationResult = parsedNumber1 / parsedNumber2;
                calculatorText += "=" + calculationResult;
                document.getElementById("display").innerHTML = calculatorText;
                break;
            case "multiplication":
                calculationResult = parsedNumber1 * parsedNumber2;
                calculatorText += "=" + calculationResult;
                document.getElementById("display").innerHTML = calculatorText;
                break;
            case "subtraction":
                calculationResult = parsedNumber1 - parsedNumber2;
                calculatorText += "=" + calculationResult;
                document.getElementById("display").innerHTML = calculatorText;
                break;
            case "no symbols found":
                document.getElementById("display").innerHTML = calculatorText;
        } 
    } else {
        document.getElementById("display").innerText = "";
    }
}


function enterZero() {
    calculatorText += "0"
    document.getElementById("display").innerHTML = calculatorText;
}

function enterOne() {
    calculatorText += "1";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterTwo() {
    calculatorText += "2";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterThree() {
    calculatorText += "3";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterFour() {
    calculatorText += "4";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterFive() {
    calculatorText += "5";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterSix() {
    calculatorText += "6";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterSeven() {
    calculatorText += "7";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterEight() {
    calculatorText += "8";
    document.getElementById("display").innerHTML = calculatorText;
}

function enterNine() {
    calculatorText += "9";
    document.getElementById("display").innerHTML = calculatorText;
}


function clearCalculator() {
    document.getElementById("display").innerText = "";
    calculatorText = "";
    parsedNumber1 = undefined;
    parsedNumber2 = undefined;
    calculationResult = undefined;
}

function deleteCalculator() {
    if (calculatorText.indexOf("=") !== -1) {
        calculatorText = calculatorText.substring(0, calculatorText.indexOf("="));
    }
    
    calculatorText = calculatorText.substring(0, calculatorText.length - 1);
    document.getElementById("display").innerHTML = calculatorText;

    if (parsedNumber1 != undefined && parsedNumber2 != undefined) {
        if (calculatorText.indexOf("+") !== -1 && isNotADecimal(calculatorText)) {
            parsedNumber2 = parseInt(calculatorText.substring(calculatorText.indexOf("+") + 1, calculatorText.length));
        } else {
            calculatorText = parseFloat(calculatorText.substring(calculatorText.indexOf("+") + 1, calculatorText.length));
        }

        if (calculatorText.indexOf("-") !== -1 && isNotADecimal(calculatorText)) {
            parsedNumber2 = parseInt(calculatorText.substring(calculatorText.indexOf("-") + 1, calculatorText.length));
        } else {
            parsedNumber2 = parseFloat(calculatorText.substring(calculatorText.indexOf("-") + 1, calculatorText.length));
        }

        if (calculatorText.indexOf("/") !== -1 && isNotADecimal(calculatorText)) {
            parsedNumber2 = parseInt(calculatorText.substring(calculatorText.indexOf("/") + 1, calculatorText.length));
        } else {
            parsedNumber2 = parseFloat(calculatorText.substring(calculatorText.indexOf("/") + 1, calculatorText.length));
        }

        if (calculatorText.indexOf("x") !== -1 && isNotADecimal(calculatorText)) {
            parsedNumber2 = parseInt(calculatorText.substring(calculatorText.indexOf("x") + 1, calculatorText.length));
        } else {
            parsedNumber2 = parseFloat(calculatorText.substring(calculatorText.indexOf("x") + 1, calculatorText.length));
        }
    } else {
        if (isNotADecimal(calculatorText)) {
            parsedNumber1 = parseInt(calculatorText.substring(0, calculatorText.length - 1));
        } else {
            parsedNumber1 = parseFloat(calculatorText.substring(0, calculatorText.length - 1));
        }
    }
}

function makeNegativeOrPositive() {
    if (calculatorText.substring(0, 1) === "-") {
        calculatorText = calculatorText.substring(1, calculatorText.length);
        document.getElementById("display").innerHTML = calculatorText;
    } else {
        calculatorText = "-" + calculatorText;
        document.getElementById("display").innerHTML = calculatorText;
    }
}

function getEmptyParsedNumber() {
    if (parsedNumber1 == undefined) {
        return parsedNumber1;
    } else {
        return parsedNumber2;
    }
}


function isNotADecimal(text) {
    if (text.indexOf(".") !== -1) {
        return false;
    } else if(text.indexOf("+") !== -1 || text.indexOf("-") !== -1 || text.indexOf("/") !== -1 || text.indexOf("x") !== -1) {
        if(text.substring(text.indexOf("."), text.length) === -1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}


function readExpression() {
    for (let i = 0; i < calculatorText.length; i++) {
        if (calculatorText[i] === "+") {
            return "addition";
        }
        
        if (calculatorText[i] === "-") {
            return "subtraction";
        } 
        
        if (calculatorText[i] === "/") {
            return "division";
        }
        
        if (calculatorText[i] === "*") {
            return "multiplication";
        }
    }
    return "no symbols found";
}