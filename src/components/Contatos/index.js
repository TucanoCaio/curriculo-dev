import React from "react";
import { BrowserRouter } from "react-router-dom";
import { IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { Contacts } from "./style";

const Contato = ({ contato, nomePessoa }) => (
  <BrowserRouter>
    <p>
      <Contacts to="tel:{contato}">
        <IoCall />
        {nomePessoa} - {contato}
      </Contacts>
      <Contacts
        to="https://web.whatsapp.com/send?phone={contato}"
        target="_blank"
      >
        <IoLogoWhatsapp /> {contato}
      </Contacts>
    </p>
  </BrowserRouter>
);

export default Contato;
