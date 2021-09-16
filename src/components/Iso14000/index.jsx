import React from "react";
import "./styles.css";
import iso from "../../assets/img/iso.png";

export function Iso14000() {
  return (
    <div className="iso">
      <div className="texto">
        <ul>
          <p>
            A ISO 14000 é um conjunto de normas internacionais relacionadas à
            gestão ambiental, das quais a ISO 14001 é a norma mais conhecida,
            pois é nela que são estabelecidos os requisitos para implantação
            de sistemas de gestão ambiental e sua certificação.
          </p>
          <p>
            As demais normas desse conjunto não são normas de certificação, mas
            de apoio e fornecem informações valiosas para complementar o
            entendimento teórico e prático de aplicação da ISO.
          </p>
          <p>
           A certificação pode trazer várias recompensas para uma empresa,
            como, por exemplo, uma vantagem financeira para o empreendimento.
          </p>
          <p>
            Porém, seus benefícios vão além da satisfação de
            fazer uma boa ação. A adesão ao padrão pode resultar em melhor
            conformidade com regulamentos ambientais, maior negociabilidade,
            melhor uso de recursos, bens e serviços de maior qualidade, maiores
            níveis de segurança e maiores lucros.
          </p>
        </ul>
      </div>
      <div className="containeriso">
        <img className="imagem" src={iso} alt="iso"></img>
      </div>
    </div>
  );
}
