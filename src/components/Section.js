import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const Section = () => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="200">
          <Box sx={{ bgcolor: '#dddddd', height: '100vh' }} />
        </Container>
      </React.Fragment>
    )   
}
export default Section 