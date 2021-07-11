var valuePassed = "";
var inputFieldValue = document.querySelector(".inputField");

document.addEventListener("keydown", function (event) {
    valuePassed = valuePassed + event.key;
    inputFieldValue = valuePassed;
});

for (var i = 0; i < 10; i++) {
    document.getElementsByClassName("numericButton")[i].addEventListener("click", function () {
        stringProcessNum(this.innerHTML);
    });
}
for (var j = 0; j < 4; j++) {
    document.getElementsByClassName("mathsButton")[j].addEventListener("click", function () {
        stringProcessSign(this.innerHTML);
    });
}

function stringProcessSign(valueRecieved) {
    valuePassed = valuePassed + " " + valueRecieved + " ";
    inputFieldValue.value = valuePassed;
}

function stringProcessNum(valueRecieved) {
    valuePassed = valuePassed + valueRecieved;
    inputFieldValue.value = valuePassed;
}

function clearField() {
    valuePassed = "";
    inputFieldValue.value = "";
}

function displayResult() {
    var newString = valuePassed.split(" ");
    var math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        'x': function (x, y) { return x * y },
        '/': function (x, y) { return x / y }
    };
    inputFieldValue.value = math_it_up[newString[1]](newString[0], newString[2]);
    valuePassed = inputFieldValue.value;
}