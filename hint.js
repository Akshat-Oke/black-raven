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

document.body.insertAdjacentHTML("beforeend", `<a class="bottom-link" href="./ravens-message.wav"
>Raven's message: /ravens-message.wav</a
><br/>
<a class="bottom-link" href="https://whatsapp.com/channel/0029Va91PZqHbFVD8tOA0A3L"
>Subscribe for announcements</a
>
<br/>
<a class="bottom-link" href="https://akshat-oke.github.io/black-raven/solutions"
>Solutions</a
>
`)

function displayAlert(id, message) {
    if (!localStorage[id]) {
        window.alert(message)
        localStorage[id] = true;
    }
}

// use the function for the above instead
displayAlert("announcement1", "New announcements will be in WhatsApp channel")

displayAlert("solutions1", "Solutions are at the link on the bottom of the page.")