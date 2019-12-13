import React from 'react';


function StarWarsFilms(props){

     return(
          <>
          <div>
            {
                props.film.map(titleName => {
                    return(
                        <h1>Movies: {titleName}</h1>
                    )
                })
            }
          </div>
          </>
     )
}
export default StarWarsFilms;