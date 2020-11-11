import React, { Component } from "react";
import Pokemon from "../Componentes/Pokemon";

class PokemonContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            pokemons: [],
            
        }
    }

    componentDidMount (){
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {return response.json();})
        .then(pokemonsJson => this.setState ({pokemons: pokemonsJson.results}))
    }

    render () {
        const { pokemons } = this.state;
        return <Pokemon pokemons={pokemons}/>
    }
}

export default PokemonContainer