import React from "react";
import Botao from "../Botao";
import "./styles.css";
import logoimage from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export function BarraNavegacao() {
  const [botaoAtivo, setBotaoAtivo] = React.useState({
    home: "active",
    estatistica: "",
    problematicas: "",
    iso14000: "",
    quemsomos: "",
  });

  function setaBotaoPrincipal(botaoEscolhido) {
    let estadoInicial = {
      home: "",
      estatistica: "",
      problematicas: "",
      quemsomos: "",
    };
    switch (botaoEscolhido) {
      case "home":
        estadoInicial.home = "active";
        break;
      case "estatistica":
        estadoInicial.estatistica = "active";
        break;
      case "problematica":
        estadoInicial.problematicas = "active";
        break;
      case "iso14000":
        estadoInicial.iso14000 = "active";
        break;
      default:
        estadoInicial = { ...botaoAtivo };
        break;
    }
    setBotaoAtivo({ ...estadoInicial });
  }

  return (
    <div className="barranavegacao">
      <div className="conteinerlogo">
        <img src={logoimage} alt="logo" className="logo"></img>
        <h1>ALMA</h1>
      </div>
      <div className="conteinerbotoes">
        <Link to="/" onClick={() => setaBotaoPrincipal("home")}>
          <Botao
            id={botaoAtivo.home}
            texto="Home"
            classeDoBotao="botao"
            icon="bx:bxs-home"
          ></Botao>
        </Link>
        <Link
          to="/estatistica"
          onClick={() => setaBotaoPrincipal("estatistica")}
        >
          <Botao
            id={botaoAtivo.estatistica}
            texto="Estatísticas"
            classeDoBotao="botao"
            icon="whh:statistics"
          ></Botao>
        </Link>
        <Link
          to="/problematicas"
          onClick={() => setaBotaoPrincipal("problematica")}
        >
          <Botao
            id={botaoAtivo.problematicas}
            texto="Problemáticas"
            classeDoBotao="botao"
            icon="ic:baseline-sync-problem"
          ></Botao>
        </Link>
        <Link to="/iso14000" onClick={() => setaBotaoPrincipal("iso14000")}>
          <Botao
            id={botaoAtivo.iso14000}
            texto="Iso 14000"
            classeDoBotao="botao"
            icon="carbon:book"
          ></Botao>
        </Link>
        <Link to="/quemsomos" onClick={() => setaBotaoPrincipal("quemsomos")}>
          <Botao
            id={botaoAtivo.quemsomos}
            texto="Quem Somos"
            classeDoBotao="botao"
            icon="fluent:people-team-16-filled"
          ></Botao>
        </Link>
      </div>
    </div>
  );
}
