import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./Componentes/Home";
import PokemonContainer from "./Containers/PokemonContainer";
import StarwarsContainer from "./Containers/StarwarsContainer";


export const Router = () => {
    return (
        <>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/starwars" component={StarwarsContainer} />
                    <Route  path="/pokemon" component={PokemonContainer} />
                </Switch>
            </div>
        </>
    );
}
