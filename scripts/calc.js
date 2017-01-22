var calcInput = "";

var calcInputArray = [
    {
        "id": 1,
        "inputText": "0"
    }
];

var calcInputField = document.getElementById("calcOutput");

function calcClick(btn){
    calcInput+="1";
    calcInputField.innerHTML = calcInput;
}