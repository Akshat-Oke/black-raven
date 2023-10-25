// document.body.insertAdjacentHTML("beforeend", "<div id='hint-toggle'>Hint</div>");
// create a div
var div = document.createElement("div");
div.setAttribute("id", "hint-toggle");
div.innerHTML = "Hint"
// add the div to the body
document.body.appendChild(div);
function toggleHint() {
    document.body.classList.toggle("show-hints")
}
div.addEventListener("click", toggleHint)

//// Display the number of visits
// get query parameter from URL
let urlParams = new URLSearchParams(window.location.search);
let visits = urlParams.get('v');
// console.log(visits)
if (visits) {
    let visitsElement = document.createElement("div")
    visitsElement.setAttribute("class", "visits")
    visitsElement.innerHTML = visits + " ravens have perched here.";
    document.body.appendChild(visitsElement);
}

document.body.insertAdjacentHTML("beforeend", `<a id="audio" href="./ravens-message.wav"
>Raven's message: /ravens-message.wav</a
>`)
