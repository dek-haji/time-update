

let output = document.querySelector(".output");
let article = document.createElement("article");
let button = document.createElement("button");
output.appendChild(article)
getDate();

function getDate () {
    let date = new Date();
    let day = date.getUTCDate();
    let month= date.getUTCMonth() + 1;
    let year = date.getFullYear();
    let displayDate = `${month} / ${day} / ${year}`
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let timestamp = ` ${hours}:${minutes}`;
    let combo = `${displayDate} ${timestamp}`
    article.innerHTML = combo;

    button.textContent="Get Time & Date"
    article.appendChild(button);
}

button.addEventListener("click", () => {
getDate();
})



const timeBuilder = () => {
    let cuurentDate = new Date();

let timeUpdate = document.querySelector(".time")
let date = document.createElement("h2")
date.textContent = currentDate
}