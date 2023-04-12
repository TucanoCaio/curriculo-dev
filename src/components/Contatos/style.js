import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Contacts = styled(HashLink)`
  &:hover {
    color: #18d7dd;
    opacity: 0.8;
  }
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #6c757d;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;
