import react, { useState } from "react";
import styled from "styled-components";

// Parte de cima da página

const Title = styled.div`
  display: flex;
  height: 117px;
  align-items: center;

  h1 {
    margin-right: 22.7px;
    height: 32px;
    width: 322px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #274264;
  }

  span {
    margin-right: 32px;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #8798ad;
  }
`;

const Header = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <Title>
      <h1>Oportunidades em destaque</h1>
      <span>Geologalização Ativa</span>
    </Title>
  );
};

export default Header;
