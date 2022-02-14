import * as React from 'react';
import {useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardP from "./CardP";



const Section = () => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCharacters(data.results);
      });
  
  }, []);

    return (
        <React.Fragment>
         
        <CssBaseline />
        <Container sx= {{display: "flex", flexWrap: "wrap", justifyContent: "center", ml: 10, mt: 8, mb: 7, bgcolor: "#d3d3d3"}}>
           
          {characters.map ((character, index) =>
          
          <CardP
          image={character.image}
          name={character.name}
          species={character.species}
          gender={character.gender}
        
          />
          

          
        )}
        
       </Container>

        
      </React.Fragment>
    )   
}
export default Section 