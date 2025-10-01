const button = document.getElementById("togglebtn");
const body = document.body;

body.classList.add("light");

button.addEventListener("click",() => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
});
