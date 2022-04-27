"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const coracao_png_1 = __importDefault(require("../assets/coracao.png"));
const coracaoazul_png_1 = __importDefault(require("../assets/coracaoazul.png"));
// Sessão de cards da página
const BodyCard = styled_components_1.default.div `
  width: 314px;
  height: 316px;
  border: 1px solid #e6eaf6;
`;
const Line = styled_components_1.default.div `
  width: 312px;
  height: 1px;
  background-color: #e6eaf6;
`;
const HeaderCard = styled_components_1.default.div `
  color: #8798ad;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 12px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const Container = styled_components_1.default.div `
  height: 216px;
`;
const Container1 = styled_components_1.default.div `
  display: flex;
  justify-content: space-around;
`;
const Container2 = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  margin-left: 20px;
  margin-right: 25px;
`;
const TextArea = styled_components_1.default.div `
  width: 203px;
  height: 102px;
  margin-top: 21px;
`;
const TextP = styled_components_1.default.p `
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 203px;
  height: 66px;
  color: #274264;
  margin-bottom: 16px;
`;
const Span = styled_components_1.default.span `
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #21d170;
`;
const Image = styled_components_1.default.img `
  width: 32px;
  height: 25px;
  padding-top: 32px;
  padding-right: 10px;
`;
const Info = styled_components_1.default.div `
  display: flex;
  align-items: center;

  width: 100%;
`;
const Info1 = styled_components_1.default.div `
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
const Info2 = styled_components_1.default.div `
  width: 37px;
  height: 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #8798ad;
  font-size: 9px;
  line-height: 10px;
`;
const Button = styled_components_1.default.button `
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
const Footer = styled_components_1.default.div `
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
const CardList = ({ card }) => {
    const [imagem, setImagem] = (0, react_1.useState)();
    const [button, setButton] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        if (card.level === "subscribe") {
            setImagem(coracao_png_1.default);
            setButton('Participar');
        }
        else {
            setImagem(coracaoazul_png_1.default);
            setButton('Doar');
        }
    });
    return (<BodyCard>
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
            <TextP>{card.subscribe_data ? card.subscribe_data.title : card.material_data.title}</TextP> <Span>{card.action_data.title}</Span>{" "}
          </TextArea>
          <Image src={imagem} alt="Image icon"/>
        </Container1>
        <Container2>
          <Info>
            {/* vagas disponiveis */}
            <Info1>{card.subscribe_data ? card.subscribe_data.position.available : card.material_data.position.available}</Info1>
            <Info2>{card.subscribe_data ? 'Vagas Disponíveis' : 'itens disponíveis'}</Info2>
          </Info>
          <Button>{button}</Button>
        </Container2>
      </Container>
      <Line />
      <Footer>
        {/* endereço da vaga */}
        <div> {`${card.subscribe_data ? card.subscribe_data.address.city : ''} ${card.subscribe_data ? card.subscribe_data.address.state : 'Remoto'} `} </div>
      </Footer>
    </BodyCard>);
};
exports.default = CardList;
