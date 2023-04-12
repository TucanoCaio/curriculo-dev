import React from "react";
import { BrowserRouter } from "react-router-dom";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { Contacts } from "./style";

const Contato = ({ contato, nomePessoa, whatsappLink, telLink }) => (
  <BrowserRouter>
    <p>
      <Contacts to={telLink}>
        <IoCall />
        {nomePessoa} - {contato}
      </Contacts>
      <Contacts to={whatsappLink} target="_blank">
        <IoLogoWhatsapp /> {contato}
      </Contacts>
    </p>
  </BrowserRouter>
);

export default Contato;
