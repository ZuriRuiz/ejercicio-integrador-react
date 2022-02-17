import * as React from 'react';
import Box from '@mui/material/Box';
import ToolBar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";


const SearchBar = ({ actualizarInput, escucharClickDelBoton }) => {
    
    return (
        
            
        <Box sx={{mt: 3, display: "flex", justifyContent: "center"}}>
            <ToolBar>
                <SearchIcon sx={{mr: 1}} />
                <TextField
                    onChange={actualizarInput} 
                    id = "outlined-basic" 
                    label="Search character" 
                    variant="outlined"
                />
                
                <Button sx={{ml: 2, bgcolor: "#45c812", color: "black"}} onClick={escucharClickDelBoton} variant="">
                    Search
                    
                </Button>
                
            </ToolBar>
        </Box>
            
        
    )
}


export default SearchBar