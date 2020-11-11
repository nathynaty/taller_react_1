import React, {Fragment} from "react";
import { Link } from "react-router-dom";
 
function Pokemon ({pokemons})  {

    return (
        <Fragment>
            <h1>Lista de pokemons</h1>
            <ul>
                {pokemons.map(pokemon => {
                    return <li>{pokemon.name}</li>
                })}
            </ul>
            <Link to="/">HOME</Link>
            <br/>
            <Link to="/starwars">STAR WARS</Link>
        </Fragment>
    );

}

export default Pokemon;