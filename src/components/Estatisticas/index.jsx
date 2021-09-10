import React from "react";
import "./styles.css";
import "./styles.css";
import mapa from "../../assets/img/mapa.png";

export function Estatistica() {
  return (
    <div className="estatistica">
      <div className="div-iframe"
        dangerouslySetInnerHTML={{
          __html: "<iframe src='http://terrabrasilis.dpi.inpe.br/app/map/deforestation?hl=pt-br' />",
        }}
      ></div>

      {/* <div className="topicos">
        <ul className="lista-topicos">
          <li>De acordo com a pesquisa, o desmatamento acumulado nos últimos 11
          meses, de agosto de 2020 até junho de 2021, chegou a 8.381 km²;</li>
        <li> Os estados mais desmatados são o Pará e o Amazonas;</li>
        <li>
          A taxa de desmatamento de maio de 2021 em comparação ao mesmo período
          do ano passado aumentou 70%. A área desmatada, de 1.125 km², equivale
          a uma floresta quase do tamanho do município do Rio de Janeiro e foi o
          maior saldo da série histórica para o mês dos últimos 10 anos.
        </li>
        </ul>
      </div>
      <div className="conteinermapa">
        <div>
          <img src={mapa} alt="mapa"></img>
          <p className="fonte">Fonte: TerraBrasilis</p>
        </div>
      </div> */}
    </div>
  );
}
