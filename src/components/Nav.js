import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Nav = () => {
     return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar sx={{bgcolor: "black", position:"static"}} >
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"#0d880b"}}>
            Rick and Morty Api
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav