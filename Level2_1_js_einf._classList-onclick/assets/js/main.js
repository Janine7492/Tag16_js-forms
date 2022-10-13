function changeHeadline(event) {
    event.preventDefault();
    const header = document.getElementById("header");
    header.classList.add("new");
}

function resetHeadline(event) {
    event.preventDefault();
    const header = document.getElementById("header");
    header.classList.remove("new");
}

function toggle(event) {
    event.preventDefault();
    const header = document.getElementById("header");
    header.classList.toggle("new");
}