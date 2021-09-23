import React from "react";
import "./styles.css";

export function Problematicas() {
    React.useState(() => (document.title = "ALMA - Problemáticas"), []);

    return (
        <div className="problematicas">
            <div className="texto">
                <p>
                    “As consequências provocadas pelo desmatamento são devastadoras. E a primeira afetada é a
                    biodiversidade local.
                </p>
                <p>
                    Uma vez que há a destruição das florestas, perde-se o habitat natural de muitas espécies,
                    contribuindo para a morte de animais e até mesmo a extinção dos tipos endêmicos.
                </p>
                <p>
                    Disso derivam problemas também para a cadeia alimentar e para os ecossistemas locais. Essa perda
                    pode impactar até as atividades econômicas, como a caça e a pesca.
                </p>
                <p>
                    Ademais, o desmatamento gera consequências negativas também sobre a água e os solos. Como as
                    florestas são responsáveis pela regulação de cerca de 57% das águas doces superficiais do mundo,
                    elas contribuem fornecendo umidade para o ambiente.
                </p>
                <p>
                    Ou seja, a retirada delas implica a alteração do equilíbrio climático de muitas regiões, sem falar
                    na intensificação do efeito estufa.
                </p>
                <p>
                    Além disso, as florestas melhoram a drenagem dos terrenos, e sua ausência intensifica os
                    deslizamentos de terra em áreas de grande inclinação, acentua as inundações, facilita a erosão do
                    solo e a desertificação.
                </p>
                <p>
                    Ademais, um artigo publicado na Frontiers in Veterinary Science estabeleceu que há uma conexão entre
                    o desmatamento e a ocorrência de doenças zoonóticas e transmitidas por vetores.
                </p>
                <p>
                    O estudo indica que o desmatamento levou ao aumento de surtos de vírus semelhantes ao COVID-19 e
                    também facilita a propagação de doenças transmitidas por vetores, como a malária.”
                </p>
            </div>
        </div>
    );
}
