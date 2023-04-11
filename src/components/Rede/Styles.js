import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Hlink = styled(HashLink)`
  &:hover {
    color: #18d7dd;
    opacity: 0.8;
  }
  color: #6c757d;
`;
