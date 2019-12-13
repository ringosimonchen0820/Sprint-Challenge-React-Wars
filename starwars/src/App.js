import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

const MainContainer = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
`
const MainHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charData, setCharData] = useState([]);

  const [pageState, setPageState] = useState(1);

  function changePage(change){
    let newPage = pageState + change;
    if (newPage === 0) newPage = 1;
    setPageState(newPage);
  }

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?page=${pageState}`)
    .then(res => {
      console.log(res.data.results);
      setCharData(res.data.results);
    })
    .catch(error => {
      console.log("Error", error)
    })
  },[pageState])

  

  return (
     <div className="App">
      <MainContainer>
        
        <MainHeader>React Wars</MainHeader>
        
        <Button onClick={() => changePage(-1)} disabled={pageState <= 1}> {'Prev'}</Button>
        <Button onClick={() => changePage(+1)} disabled={pageState >= 9}> {'Next'}</Button>
       
        
        {
          charData.map(items => {
            return (
              <StarWarsCard dataSets = {items}/>
            )
          })
        }

      </MainContainer>
     </div>
  );
}

export default App;
