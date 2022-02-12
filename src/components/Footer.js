import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
        <AppBar sx={{bgcolor: "#000000", position:"static"}} >
        <Toolbar>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: "center" }}}>
                <Typography variant="h7" component="div">
                    Zuri Ruiz
                </Typography>
                <Link sx= {{ml: 2}}href="https://github.com/ZuriRuiz" underline="none">
                {'Mi github'}
                </Link>
            </Box>
          <Avatar sx= {{display: { xs: 'flex', justifyContent: "center" }}} src="https://i.pinimg.com/originals/12/c7/4a/12c74ab187e1731c3b832711896fe2bf.png" />
          

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer