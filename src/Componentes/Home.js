import React from "react";
import { Link } from "react-router-dom";
 
const Home = () => {

    return (
        <div>
            <header className="App-header">
                <h1>Home</h1>
                <Link to="/starwars">STARWARS</Link>
                <br/>
                <Link to="/pokemon">POKEMON</Link>
            </header>
        </div>
    );

}

export default Home;