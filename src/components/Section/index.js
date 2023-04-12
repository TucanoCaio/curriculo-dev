import React from "react";
import Title from "../Title/index.js";
import Card from "../Card/index.js";
import Redes from "../Rede/index.js";
import Skills from "../Skill/index.js";
import Projetos from "../Projetos/index.js";
import Contato from "../Contatos/index.js";
import { Highlight, Info } from "../Card/styles";
import { SectionHeading, Sections } from "./styles";

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá, me chamo" />
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
      <Info id="contacts">
        <Title texto="Contatos e Referencias" />
        {profile.referencia.map((cont) => (
          <Contato
            key={cont.id}
            nomePessoa={cont.nomePessoa}
            contato={cont.contato}
          />
        ))}
      </Info>
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
      <Title texto="Projetos" />

      {profile.projetos.map((proj) => (
        <Projetos
          chave={proj.id}
          nomeProjeto={proj.nomeProjeto}
          repGithub={proj.repGithub}
          appRun={proj.appRun}
        />
      ))}
    </Sections>
  </>
);

export default Section;
