import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Dwight2 = () => {
  return (
    <Card sx={{minWidth: '15vw', width: '20vw', maxHeight: '60vh', backgroundColor: 'gray', borderRadius: '1rem 1rem', cursor: 'pointer', ":hover": {transform: 'scale(1.1)'}}}>
      <CardMedia
        component="img"
        height="300vh"
        image="dwight_schrute.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dwight Schrute
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Built using BertGeneration
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default Dwight2;