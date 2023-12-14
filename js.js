function showEasterEgg() {
    document.getElementById('easter-egg-message').style.display = 'block';
}
let clickCount = 0;
function toggleDarkMode() {
    const body = document.getElementById("body");
    const content = document.getElementById("content");
    const header = document.getElementById("header");
    if (clickCount < 6) {
        body.classList.toggle("darkmode")
        content.classList.toggle("darkmode")
        header.classList.toggle("darkmode")
    }
    else if (clickCount === 6) {
        body.classList.remove("darkmode")
        content.classList.remove("darkmode")
        header.classList.remove("darkmode")
        body.classList.toggle("amoledmode")
        content.classList.toggle("amoledmode")
        header.classList.toggle("amoledmode-header")
    }
    clickCount = (clickCount + 1) % 7
   // body.classList.toggle("darkmode")
   // content.classList.toggle("darkmode")

}
