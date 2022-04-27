"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
// Parte de cima da página
const Title = styled_components_1.default.div `
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
    return (<Title>
      <h1>Oportunidades em destaque</h1>
      <span>Geologalização Ativa</span>
    </Title>);
};
exports.default = Header;
