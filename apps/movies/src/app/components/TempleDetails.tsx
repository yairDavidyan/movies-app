import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Temple } from '../interfaces/temple';
import MatrixHall from './MatrixHall';

export default function TempleDetails() {
  const { id } = useParams();
  const [templeDetails, setTempleDetails] = useState<Temple>();
  useEffect(() => {
    if (id) {
      fetch(`api/movie/${id}`)
        .then((res) => res.json())
        .then((data) => setTempleDetails(data));
    }
  }, []);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{
        minHeight: '70vh',
      }}
    >
      <Grid container justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={templeDetails?.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {templeDetails?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {templeDetails && <MatrixHall templeDetails={templeDetails} />}
    </Grid>
  );
}
