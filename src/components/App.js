import "./App.css";
import React from "react";
import { BarraNavegacao } from "./BarraNavegação";
import PaginaInicial from "./PaginaInicial";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Estatistica } from "./Estatisticas";
import { Rodape } from "./Rodape/index";
import { Problematicas } from "./Problematicas";
import { QuemSomos } from "./QuemSomos";
import { Iso14000} from "./Iso14000"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BarraNavegacao></BarraNavegacao>
                <Switch>
                    <Route exact path="/" component={PaginaInicial} />
                    <Route exact path="/estatistica" component={Estatistica} />
                    <Route exact path="/problematicas" component={Problematicas} />
                    <Route exact path="/iso14000" component={Iso14000} />
                    <Route exact path="/quemsomos" component={QuemSomos} />
                </Switch>
                <Rodape></Rodape>
            </BrowserRouter>
        </div>
    );
}

export default App;
