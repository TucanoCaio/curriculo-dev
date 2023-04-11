import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";
import { Hlink } from "./Styles";

const Redes = ({ github, linkedin }) => (
  <BrowserRouter>
    <p>
      <Hlink to={github}>
        <AiFillGithub /> {github}
      </Hlink>
    </p>
    <p>
      <Hlink to={linkedin}>
        <AiFillLinkedin /> {linkedin}
      </Hlink>
    </p>
  </BrowserRouter>
);
export default Redes;
