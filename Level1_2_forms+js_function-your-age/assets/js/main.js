const cYear = 2022;

function calcAge(event) {
    event.preventDefault();
    const bYear = document.getElementById("year").value;
    const currAge = cYear - bYear;
    document.getElementById("age").innerHTML = currAge + " Jahre";
}