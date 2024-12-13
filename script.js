function calculate() {
    let operator = document.getElementById("selectOperator").value;
    let message = document.getElementById("result");
    var color = document.getElementById("colorChange");
    color.classList.remove("bg-danger", "bg-warning", "bg-success");
    message.innerHTML = "";
    let result = "";
    try {
        var numOneString = document.getElementById("numOne").value;
        var numTwoString = document.getElementById("numTwo").value;
        if (numOneString == "" || numTwoString == "") {
            color.classList.add("bg-danger");
            throw "Error: Input field(s) should not be empty.";
        } 
        var numOne = parseFloat(numOneString);
        var numTwo = parseFloat(numTwoString);
        if (isNaN(numOne) || isNaN(numTwo)) {
            color.classList.add("bg-danger");
            throw "Error: Please enter valid number(s).";
        }
        switch (operator) {
            case "add":
                result = add(numOne, numTwo);
                break;
            case "sub":
                result = sub(numOne, numTwo);
                break;
            case "mul":
                result = mul(numOne, numTwo);
                break;
            case "div":
                if (numTwo == 0) {
                    color.classList.add("bg-warning");
                    throw "Error: Cannot divide by zero.";
                }
                result = div(numOne, numTwo);
                break;
            default:
                color.classList.add("bg-danger");
                throw "Error: Please select an operator.";
        }
    } catch (error) {
        message.innerHTML = error;
    }
    finally {
        if (result!== "") {
            color.classList.add("bg-success");
            document.getElementById("result").innerHTML = result;
        }
    }
}
function add(numOne, numTwo) {
    return numOne + numTwo;
}
function sub(numOne, numTwo) {
    return numOne - numTwo;
}
function mul(numOne, numTwo) {
    return numOne * numTwo;
}
function div(numOne, numTwo) {
    return numOne / numTwo;
}