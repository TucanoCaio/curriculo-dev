import { BrowserRouter } from "react-router-dom";
import { Hlink } from "../Rede/Styles";
import { Dd, Dt, ItemList, SkillList } from "../Skill/styles";

const Projetos = ({ repGithub, appRun, nomeProjeto }) => (
  <BrowserRouter>
    <Dt>
      <SkillList>{nomeProjeto}</SkillList>
      <Dd>
        <ItemList>
          <Hlink to={repGithub} target="_black">
            {repGithub}
          </Hlink>
        </ItemList>
        <ItemList>
          <Hlink to={appRun} target="_black">
            {appRun}
          </Hlink>
        </ItemList>
      </Dd>
    </Dt>
  </BrowserRouter>
);
export default Projetos;
