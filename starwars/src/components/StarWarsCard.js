import React from 'react';
import axios from 'axios';
import StarWarsFilms from './StarWarsFilms';
import styled from 'styled-components';

const CardContainer = styled.div`
     background-color:	#FFD9AD;
     border:1px solid white;
     width:300px;
     border-radius:10px;
`

function StarWarsCard(props) {
    const name = props.dataSets.name
    const gender = props.dataSets.gender
    const birthYear = props.dataSets.birth_year
    const films = props.dataSets.films

    let willy = []
    films.map(items => {
        return (
            axios.get(`${items}`)
            .then(res => {
                console.log(res.data.title)
                willy.push(res.data.title)
            })
            .catch(error => {
                console.log("Error", error)
            })
        )
    })

    return(
        <div>
            <StarWarsFilms 
                film={willy} 
            />
            
            <CardContainer>
                <h1>{name}</h1>
    
                <p>Gender: {gender}</p>
    
                <p>Birth Year: {birthYear}</p>

                <p>Eye Color: {props.dataSets.eye_color}</p>

                <p>Hair Color: {props.dataSets.hair_color}</p>

                <p>Skin color: {props.dataSets.skin_color}</p>

                <p>Mass: {props.dataSets.mass}-kg</p>

                <p>Height: {props.dataSets.height}-cm</p>

                <p># of Films: {props.dataSets.films.length}</p>

                <p># of Vehicles: {props.dataSets.vehicles.length}</p>

                <p># of Starships: {props.dataSets.starships.length}</p>
            </CardContainer>
        </div>
    )
}

export default StarWarsCard;