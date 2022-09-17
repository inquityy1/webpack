import generateJoke from "./generateJoke";
import "./styles/main.scss";
import angels from "./assets/Angels.jpg";

const angelsImg = document.getElementById("angelsImg");
angelsImg.src = angels;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
