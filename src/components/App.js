import "./App.css";
import React from "react";
import { BarraNavegacao } from "./BarraNavegação";
import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Estatistica } from "./Estatisticas";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BarraNavegacao></BarraNavegacao>
                <Switch>
                    <Route exact path="/" component={PaginaInicial} />
                    <Route exact path="/estatistica" component={Estatistica} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
