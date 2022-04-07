import "./App.css";
import CardList from "./components/CardList";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";

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
  const data = [
    {
      tipo: "Voluntariado",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "2-6",
    },
    {
      tipo: "Materias",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "36",
    },
    {
      tipo: "Materias",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "36",
    },
    {
      tipo: "Materias",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "36",
    },
    {
      tipo: "Voluntariado",
      titulo: "Entrega de roupas e alimentos para moradores de rua",
      valor: "2-6",
    },
    {
      tipo: "Arrecadação",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "R$ 5.000",
    },
    {
      tipo: "Voluntariado",
      titulo: "Entrega de roupas e alimentos para moradores de rua",
      valor: "2-6",
    },
    {
      tipo: "Materias",
      titulo: "Arrecadação de alimentos para moradores de rua",
      valor: "36",
    },
  ];

  return (
    <Body>
      <Container>
        <HeaderArea>
          <Header />
          <Toggle />
        </HeaderArea>
        <List>
          {data.map((card, index) => {
            return <CardList card={card} key={index} />;
          })}
        </List>
      </Container>
      <Footer></Footer>
    </Body>
  );
};

export default App;
