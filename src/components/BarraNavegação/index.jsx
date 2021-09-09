import React from "react";
import Botao from "../Botao";
import "./styles.css";
import logoimage from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export function BarraNavegacao() {
    return (
        <div className="barranavegacao">
            <div className="conteinerlogo">
                <img src={logoimage} alt="logo" className="logo"></img>
                <h1>ALMA</h1>
            </div>
            <div className="conteinerbotoes">
                <Link to="/">
                    <Botao texto="Home" classeDoBotao="botao" icon="bx:bxs-home"></Botao>
                </Link>
                <Link to="/estatistica">
                    <Botao texto="Estatísticas" classeDoBotao="botao" icon="whh:statistics"></Botao>
                </Link>
                <Link to="/problematica">
                    <Botao texto="Problemáticas" classeDoBotao="botao" icon="ic:baseline-sync-problem"></Botao>
                </Link>
                <Link to="/quemsomos">
                    <Botao texto="Quem Somos" classeDoBotao="botao" icon="fluent:people-team-16-filled"></Botao>
                </Link>
            </div>
        </div>
    );
}
