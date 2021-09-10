import React from "react";
import "./styles.css";
import { InlineIcon } from "@iconify/react";

export default function Botao(props) {
    return (
        <button className={props.classeDoBotao}>
            <InlineIcon icon={props.icon} />
            {props.texto}
        </button>
    );
}
