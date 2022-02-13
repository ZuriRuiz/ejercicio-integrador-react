import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const CardP = ({img, name, species, gender}) => {
    return(
        <Box>
            <Card sx={{ width: 250, m: 2 }}>
            <CardContent>
                <CardMedia 
                height="300" 
                component="img" 
                image={img} />
                <Typography variant="h5">{name}</Typography>
                <Typography variant="body2">{species}</Typography>
                <Typography variant="body2">{gender}</Typography>
            </CardContent>
      </Card>
    </Box>
    )    
}

export default CardP