import React from "react";
import Botao from "../Botao";
import "./styles.css";
import logoimage from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export function BarraNavegacao() {
    const [botaoAtivo, setBotaoAtivo] = React.useState({
        home: "active",
        estatistica: "",
        problematica: "",
        quemsomos: "",
    });

    function setaBotaoPrincipal(botaoEscolhido) {
        let estadoInicial = { home: "", estatistica: "", problematica: "", quemsomos: "" };
        switch (botaoEscolhido) {
            case "home":
                estadoInicial.home = "active";
                break;
            case "estatistica":
                estadoInicial.estatistica = "active";
                break;
            case "problematica":
                estadoInicial.problematica = "active";
                break;
            case "quemsomos":
                estadoInicial.quemsomos = "active";
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
                    <Botao id={botaoAtivo.home} texto="Home" classeDoBotao="botao" icon="bx:bxs-home"></Botao>
                </Link>
                <Link to="/estatistica" onClick={() => setaBotaoPrincipal("estatistica")}>
                    <Botao
                        id={botaoAtivo.estatistica}
                        texto="Estatísticas"
                        classeDoBotao="botao"
                        icon="whh:statistics"
                    ></Botao>
                </Link>
                <Link to="/problematica" onClick={() => setaBotaoPrincipal("problematica")}>
                    <Botao
                        id={botaoAtivo.problematica}
                        texto="Problemáticas"
                        classeDoBotao="botao"
                        icon="ic:baseline-sync-problem"
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
