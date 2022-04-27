"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const CardList_1 = __importDefault(require("./components/CardList"));
const styled_components_1 = __importDefault(require("styled-components"));
const Header_1 = __importDefault(require("./components/Header"));
const Footer_1 = __importDefault(require("./components/Footer"));
const Toggle_1 = __importDefault(require("./components/Toggle"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const Container = styled_components_1.default.div `
  max-width: 985px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderArea = styled_components_1.default.div `
  display: flex;
  margin-right: 32px;
  align-items: center;
`;
const List = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;

`;
const Body = styled_components_1.default.div `
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const App = () => {
    const [card, setCard] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        pegarCardsApi();
    }, []);
    const pegarCardsApi = () => __awaiter(void 0, void 0, void 0, function* () {
        yield axios_1.default
            .get(`https://api.hom.transform.click/search/opportunities?filter_materials=true&filter_subscribes=true`, {
            Headers: {
                "Content-Type": "application/json",
                Origin: "brasil.hom.transform.click",
            },
        })
            .then((res) => {
            setCard(res.data.response.opportunities_data);
        })
            .catch((erro) => {
            console.log(erro);
        });
    });
    console.log(card);
    return (<Body>
      <Container>
        <HeaderArea>
          <Header_1.default />
          <Toggle_1.default />
        </HeaderArea>
        <List>
          {card.map((card, index) => {
            return <CardList_1.default card={card} key={index}/>;
        })}
        </List>
      </Container>
      <Footer_1.default></Footer_1.default>
    </Body>);
};
exports.default = App;
