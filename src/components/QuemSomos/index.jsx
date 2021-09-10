import React from "react";
import "./styles.css";
import alma from "../../assets/img/alma.png";

export function QuemSomos() {
  return (
    <div className="quemsomos">
      <div className="quadro">
        <ul className="texto">
          <p>
            
            A ALMA é uma organização não governamental e fictícia que tem como
            missão concientizar a população a cerca do desmatamento que ocorre
            em larga escala no Brasil.
          </p>
          <p>
            A organização surge em meados de setembro de 2021 devido à uma ideia
            brilhante da fundadora. Assim como a ideia, a realização de todo o
            projeto foi feito pela mesma. Pesquisas, programação e designer têm
            sua assinatura.
          </p>
          <p>
            A equipe também é composta por mais quatro integrantes, os quais
            creem que a natureza é nosso lar e, portanto, deve ser cuidada e
            amada.
          </p>
          <p>
            Lucas, o integrante mais pimposo da equipe, tem como sua missão
            pessoal abraçar árvores em todos os países que visitar. Desejamos
            boa sorte à ele.
          </p>
        </ul>
      </div>
      <div className="conteinerimagem">
        <img src={alma} alt="alma"></img>
      </div>
    </div>
  );
}
