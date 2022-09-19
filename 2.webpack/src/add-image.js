import angels from "./angels.jpg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "Angels";
  img.width = 300;
  img.src = angels;
  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
