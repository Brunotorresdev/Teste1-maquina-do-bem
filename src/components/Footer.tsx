import React from "react";
import styled from "styled-components";

// Componentização e estilização da parte abaixo dos Cards

const ButtonFooter = styled.button`
  width: 233px;
  height: 51px;
  margin-top: 34.5px;
  margin-bottom: 309.5px;
  margin-right: 1029.32px;
  margin-left: 203.88px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 18.96px;
  text-align: center;
  color: #21d170;
  border: 1px solid #21d170;
  border-radius: 6px;
  background-color: #fff;

  cursor: pointer;
`;

const Footer = () => {
  return <ButtonFooter>Todas as Oportunidades</ButtonFooter>;
};

export default Footer;
