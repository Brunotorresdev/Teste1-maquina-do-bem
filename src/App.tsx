
import CardList from "./components/CardList";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Card } from "./types";

const Container = styled.div`
  max-width: 985px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderArea = styled.div`
  display: flex;
  margin-right: 32px;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;

`;

const Body = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


const App = () => {
  // estado que armazena a API
  const [card, setCard] = useState<Card[]>([]);

  // Renderizando a função pegarCardsApi assim que a tela for carregada
  useEffect(() => {
    pegarCardsApi();
  }, []);

  const pegarCardsApi = async () => {
    await axios
      .get(
        `https://api.hom.transform.click/search/opportunities?filter_materials=true&filter_subscribes=true`,
        {
          headers: {
            "Content-Type": "application/json",
            Origin: "brasil.hom.transform.click",
          },
        }
      )
      .then((res) => {
        setCard(res.data.response.opportunities_data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  console.log(card);

  return (
    <Body>
      <Container>
        <HeaderArea>
          <Header />
          <Toggle />
        </HeaderArea>
        <List>
          {card.map((card, index) => {
            return <CardList card={card} key={index} />;
          })}
        </List>
      </Container>
      <Footer></Footer>
    </Body>
  );
};

export default App;
