function getHistory() {
    return document.getElementById("history-value").innerText;
}

function getResult() {
    return document.getElementById("output-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function printResult(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = printFormattedNum(num);
    }
}

function printFormattedNum(num) {
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            printResult("");
            printHistory("");
        }
        else if (this.id == "backspace") {
            var value = reverseFormattedNumber(getResult()).toString();
            if (value) {
                value = value.substring(0, value.length - 1);
                printResult(value);
            }
        }
        else {
            var output = getResult();
            var history = getHistory();
            if (output != "") {
                output = reverseFormattedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printResult(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printResult("");
                }
            }
        }
    })
}


var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var val = reverseFormattedNumber(getResult());
        if (val != NaN) {
            val = val + this.id;
            printResult(val);
        }
    })
}