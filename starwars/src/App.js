import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharCard from './components/CharCard';

import styled from "styled-components";

const NewDiv = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  useEffect( () => {
    axios.get ('https://swapi.co/api/people/')
    .then( response => {
      console.log(response);
      const characters = response.data.results;
      setPeople(characters);
      
      

    })
    .catch(error => {
      console.log("The data was not returned", error);
    });




  }, []);

  
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log(people);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <NewDiv>
        {people.map((item, index) => 
            <CharCard key = {index} people = {item} />
          
        )}
       </NewDiv>
    </div>
  );
}

export default App;
