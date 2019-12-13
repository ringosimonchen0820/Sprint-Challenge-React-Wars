import React from 'react';
import axios from 'axios';

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
                willy.push(res.data)
            })
        )
    })

    return(
        <div>
            <StarWarsFilms 
                film={willy} 
            />
            
            <h1>
                {name}
            </h1>

            <p>
                Gender: {gender}
            </p>

            <p>
                Birth Year: {birthYear}
            </p>
        </div>
    )
}

export default StarWarsCard;