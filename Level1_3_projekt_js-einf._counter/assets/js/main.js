let result = 0;
document.getElementById("number").innerHTML = result;

console.log(result);

function addOne(event) {
    event.preventDefault();
    result += 1;
    document.getElementById("number").innerHTML = result;
}

function subOne(event) {
    event.preventDefault();
    result -= 1;
    document.getElementById("number").innerHTML = result;
}

function addTen(event) {
    event.preventDefault();
    result += 10;
    document.getElementById("number").innerHTML = result;
}

function subTen(event) {
    event.preventDefault();
    result -= 10;
    document.getElementById("number").innerHTML = result;
}

function addHundred(event) {
    event.preventDefault();
    result += 100;
    document.getElementById("number").innerHTML = result;
}

function subHundred(event) {
    event.preventDefault();
    result -= 100;
    document.getElementById("number").innerHTML = result;
}

function reset(event) {
    event.preventDefault();
    result = 0;
    document.getElementById("number").innerHTML = result;
}

function double(event) {
    event.preventDefault();
    result *= 2;
    document.getElementById("number").innerHTML = result;
}