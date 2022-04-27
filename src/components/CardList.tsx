import React from "react";
import react, { useEffect, useState } from "react";
import styled from "styled-components";
import Coracao from "../assets/coracao.png";
import CoracaoAzul from "../assets/coracaoazul.png";
import { Card } from "../types";

// Sessão de cards da página

const BodyCard = styled.div`
  width: 314px;
  height: 316px;
  border: 1px solid #e6eaf6;
`;

const Line = styled.div`
  width: 312px;
  height: 1px;
  background-color: #e6eaf6;
`;

const HeaderCard = styled.div`
  color: #8798ad;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 12px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Container = styled.div`
  height: 216px;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  margin-left: 20px;
  margin-right: 25px;
`;

const TextArea = styled.div`
  width: 203px;
  height: 102px;
  margin-top: 21px;
`;

const TextP = styled.p`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 203px;
  height: 66px;
  color: #274264;
  margin-bottom: 16px;
`;
const Span = styled.span`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #21d170;
`;

const Image = styled.img`
  width: 32px;
  height: 25px;
  padding-top: 32px;
  padding-right: 10px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

const Info1 = styled.div`
  height: 32px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #274264;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Info2 = styled.div`
  width: 37px;
  height: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #8798ad;
  font-size: 9px;
  line-height: 10px;
`;
const Button = styled.button`
  padding: 8px 16px;
  height: 34px;
  border-radius: 5px;
  background-color: #21d170;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 14px;
  padding-left: 20px;
  width: 60px;
  height: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #879bad;
`;

const CardList = ({ card }: { card: Card; key: number }) => {
  //estado para renderizar a imagem e os botoes dos cards
  const [imagem, setImagem] = useState<string>();
  const [button, setButton] = useState<string>();

  useEffect(() => {
    if (card.level === "subscribe") {
      setImagem(Coracao);
      setButton("Participar");
    } else {
      setImagem(CoracaoAzul);
      setButton("Doar");
    }
  });

  return (
    <BodyCard>
      {/* titulo do card */}
      <HeaderCard>
        <p>
          {card.level === "subscribe"
            ? "Vaga de voluntariado"
            : "Doação de material"}
        </p>
      </HeaderCard>
      <Line />
      <Container>
        <Container1>
          <TextArea>
            {/* nome da vaga             nome da açao */}
            <TextP>
              {card.subscribe_data
                ? card.subscribe_data.title
                : card.material_data.title}
            </TextP>{" "}
            <Span>{card.action_data.title}</Span>{" "}
          </TextArea>
          <Image src={imagem} alt="Image icon" />
        </Container1>
        <Container2>
          <Info>
            {/* vagas disponiveis */}
            <Info1>
              {card.subscribe_data
                ? card.subscribe_data.position.available
                : card.material_data.position.available}
            </Info1>
            <Info2>
              {card.subscribe_data ? "Vagas Disponíveis" : "itens disponíveis"}
            </Info2>
          </Info>
          <Button>{button}</Button>
        </Container2>
      </Container>
      <Line />
      <Footer>
        {/* endereço da vaga */}
        <div>
          {" "}
          {`${card.subscribe_data ? card.subscribe_data.address.city : ""} ${
            card.subscribe_data ? card.subscribe_data.address.state : "Remoto"
          } `}{" "}
        </div>
      </Footer>
    </BodyCard>
  );
};

export default CardList;
