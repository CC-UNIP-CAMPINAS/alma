import React from "react";
import "./styles.css";
import "./styles.css";
import mapa from "../../assets/img/mapa.png";

export function Estatistica() {
  return (
    <div className="estatistica">
      <div className="conteinermapa">
        <div>
          <img src={mapa} alt="mapa"></img>
          <p className="fonte">Fonte: TerraBrasilis</p>
        </div>
      </div>
    </div>
  );
}
