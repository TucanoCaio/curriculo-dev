import { useState } from "react";
import Header from "../../components/Header/index";
import Section from "../../components/Section";
import FakeAPI from "../../service/dados.json";

const Home = () => {
  const [dados] = useState(FakeAPI);

  return (
    <>
      <body>
        <Header img={dados.profile.img} />
        <main>
          <Section profile={dados.profile} />
        </main>
      </body>
    </>
  );
};

export default Home;
