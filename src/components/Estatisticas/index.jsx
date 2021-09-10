import React from "react";
import "./styles.css";
import "./styles.css";

export function Estatistica() {
    return (
        <div className="estatistica">
            <div
                className="div-iframe"
                dangerouslySetInnerHTML={{
                    __html: "<iframe src='http://terrabrasilis.dpi.inpe.br/app/map/deforestation?hl=pt-br' />",
                }}
            ></div>
        </div>
    );
}
