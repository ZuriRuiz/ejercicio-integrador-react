import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const SearchBar = () => {
    return (
        
            
        <Box sx={{mt: 3, display: "flex", justifyContent: "center"}}>
            <ToolBar>
                <SearchIcon />
                <TextField id="outlined-basic" label="" variant="outlined"/>
            </ToolBar>
        </Box>
            
        
    )
}


export default SearchBar