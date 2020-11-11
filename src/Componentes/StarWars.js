import React, {Fragment} from "react";
import { Link } from "react-router-dom";
 
function StarWars  ({personawar}) {

    return (
        <Fragment>
            <h1>Lista de personas de Star Wars</h1>
            <ul>
                {personawar.map(persona => {
                    return <li>{persona.name}</li>
                })}
            </ul>
            <Link to="/">HOME</Link>
            <br/>
            <Link to="/pokemon">POKEMON</Link>
        </Fragment>
    );


}

export default StarWars;