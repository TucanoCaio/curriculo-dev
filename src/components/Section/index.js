import React from "react";
import "./section.css";
import Title from "../Title/index.js";
import Card from "../Card/index.js";
import Redes from "../Rede/index.js";
import Skills from "../Skill/index.js";
import { Highlight, Info } from "../Card/styles";
import { SectionHeading, Sections } from "./styles";

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá, me me chamo" />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{" "}
        <Highlight>{profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <Info>
        <Title texto="Redes Sociais" />
        <Redes github={profile.github} linkedin={profile.linkedin} />
      </Info>
      <div className="contacts" id="contacts">
        <Title texto="CONTATOS - ACQA" />
      </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiencia" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          data={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />

      {profile.habilidade.map((valor) => (
        <Skills
          chave={valor.id}
          skill={valor.habilidade}
          nivelSkill={valor.nivel}
          tempoSkill={valor.tempo}
        />
      ))}
    </Sections>
    <Sections id="projects">
      <Title texto="PROJETOS ACQA" />
    </Sections>
  </>
);

export default Section;
