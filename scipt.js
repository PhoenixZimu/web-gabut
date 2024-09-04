function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    let expression = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (err) {
        document.getElementById("result").value = "Error";
    }
}
