import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { moviesType } from '../interfaces/movies';

export default function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<moviesType>();
  useEffect(() => {
    fetch(`api/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, []);

  return (
    <Grid container justifyContent="center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="500"
          image={movieDetails?.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieDetails?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieDetails?.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
