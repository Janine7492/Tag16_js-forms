function calcDiff(event) {
    event.preventDefault();
    const first = document.getElementById("firstAge").value;
    const second = document.getElementById("secondAge").value;
    let difference;

    if (first > second) {
        difference = first - second;
    } else {
        difference = second - first;
    }

    document.getElementById("result").innerHTML = difference + " Jahre";
}