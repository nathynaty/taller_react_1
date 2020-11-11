import React, { Component } from "react";
import StarWars from "../Componentes/StarWars";

class StarwarsContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            personawar: [],
            
        }
    }

    componentDidMount (){
        fetch("https://swapi.dev/api/people/")
        .then(response => {return response.json();})
        .then(personawarJson => this.setState ({personawar: personawarJson.results}))
    }

    render () {
        const { personawar } = this.state;
        return <StarWars personawar={personawar}/>
    }
}

export default StarwarsContainer