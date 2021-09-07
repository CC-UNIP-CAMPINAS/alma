import React from "react";
import "./styles.css";
import paginaInicialImg from "../../assets/img/pagina-inicial.png"; 

export default function PaginaInicial() {
    return (
        <div className="containerimagens">
            <img src={paginaInicialImg} alt="PaginaInicial"></img>
        </div>
    );
}
