
var calcInput = "0";
var prevcalcInput = "0";

var calcInputArray = [
    {
        "id": 1,
        "inputText": "0"
    }
];

var calcInputField = document.getElementById("calcOutput");

//calcInputField.preventDefault();

function calcClick(btn){
    //btn.preventDefault();
    //calcInputField.preventDefault();
    try{
    
    switch(btn) {
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
            calcInput+=btn;
            break;
        default:
            break;
        }
    }
    catch(err) {
        document.getElementById("demo").innerHTML = err.message;
    }

    if (isNaN(parseFloat(calcInput)))
        calcInputField.value = "e";
    else
        calcInputField.value = parseFloat(calcInput);
    //calcInputField.preventDefault();
}