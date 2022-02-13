import * as React from 'react';
import {useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardP from "./CardP";



const Section = () => {
  
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => setPersonajes(data));
    

  }, []);

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="200">
          <Box sx={{ bgcolor: '#dddddd', height: '100vh' }} />
          {personajes.map ((personaje) =>
          
          <CardP>
            imagen={personaje.img}
            nombre={personaje.name}
            especie={personaje.species}
            genero={personaje.gender}

          </CardP>
          
          )}
        </Container>

        
      </React.Fragment>
    )   
}
export default Section 