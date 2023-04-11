import React from "react";
import SubTitle from "../SubTitle/index.js";
import SubTitleH3 from "../SubTitleH3/index.js";
import { Highlight, Info } from "./styles";

const Card = ({ subTitle, subTitleH3, data, info }) => (
  <div>
    <SubTitle texto={subTitle} />
    <SubTitleH3 texto={subTitleH3} />
    <Info>
      <Highlight> {data} </Highlight>
    </Info>
    <p>{info}</p>
  </div>
);

export default Card;
