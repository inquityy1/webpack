import Heading from "./components/heading/heading";
import AngelsImage from "./components/angels-image/angels-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("angels"));

const angelsImage = new AngelsImage();
angelsImage.render();
