function doubleMe(event) {
    event.preventDefault();
    let result = document.getElementById("number").value;
    result *= 2;
    console.log(result);
    document.getElementById("ergebnis").innerHTML = +result;
}