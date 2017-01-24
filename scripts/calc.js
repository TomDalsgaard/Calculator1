
var calcInput = "0";
var prevcalcInput = "0";
var calcOutput = "0";
var calcFunc = "+";

var calcInputArray = [
    {
        "id": 1,
        "inputText": "0"
    }
];

var calcInputField = document.getElementById("calcOutput");

//calcInputField.preventDefault();

function ClearAll() {
    calcInput = "0";
    prevcalcInput = calcInput;
    calcOutput = "0";
    calcFunc = "+";
}

function calcClick(btn) {
    //btn.preventDefault();
    //calcInputField.preventDefault();
    try {

        switch (btn) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                calcInput += btn;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                prevcalcInput = calcInput;
                calcInput = "0";
                calcFunc = btn;
                break;
            case "=":
                switch (calcFunc) {
                    case "+":
                        calcInput = parseFloat(calcInput) + parseFloat(prevcalcInput);
                        //prevcalcInput = "0";
                        break;
                    case "-":
                        var tempInp = calcInput;
                        calcInput = prevcalcInput;
                        prevcalcInput = tempInp;
                        calcInput = parseFloat(calcInput) - parseFloat(prevcalcInput);
                        break;
                    case "*":
                        calcInput = parseFloat(calcInput) * parseFloat(prevcalcInput);
                        break;
                    case "/":
                        calcInput = parseFloat(prevcalcInput) / parseFloat(calcInput);
                        break;
                    default:
                        break;
                }
                break;
            case "C":
                ClearAll();
                break;
            case "Ce":
                calcInput = "0";
                break;
            case "bs":
                if (calcInput.toString().length > 0)
                    calcInput = calcInput.toString().substr(0, calcInput.toString().length - 1);
                if (calcInput.toString().length == 0)
                    calcInput = "0";
                break;
            case "s":
                //if(calcInput.startsWith("-",0))
                calcInput = -parseFloat(calcInput);
                break;
            default:
                break;
        }
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.message;
    }

    if (isNaN(parseFloat(calcInput)))
        calcInputField.value = "e";
    else
        calcInputField.value = parseFloat(calcInput);
    //calcInputField.preventDefault();
}