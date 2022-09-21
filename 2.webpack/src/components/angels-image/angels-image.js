import Angels from "./angels.jpg";
import "./angels-image.scss";

class AngelsImage {
  render() {
    const img = document.createElement("img");
    img.src = Angels;
    img.alt = "Kiwi";
    img.classList.add("angels-image");

    const bodyDomElement = document.querySelector("body");
    bodyDomElement.appendChild(img);
  }
}

export default AngelsImage;
