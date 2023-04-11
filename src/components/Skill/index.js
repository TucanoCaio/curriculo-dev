import React from "react";
import { Dt, Dd, SkillList, ItemList } from "./styles";

const Skills = ({ skill, nivelSkill, tempoSkill }) => (
  <Dt>
    <SkillList>{skill}</SkillList>
    <Dd>
      <ItemList>{nivelSkill}</ItemList>
      <ItemList>{tempoSkill}</ItemList>
    </Dd>
  </Dt>
);

export default Skills;
