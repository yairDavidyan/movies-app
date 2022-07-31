import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { moviesType } from '../interfaces/movies';
import { Temple } from '../interfaces/temple';
import { templeMock } from './templeMock';

export default function TempleDetails() {
  const { id } = useParams();
  const [templeDetails, setTempleDetails] = useState<Temple>();
  useEffect(() => {
    if (id) {
      const res = templeMock.find((temple) => temple.id === +id);
      setTempleDetails(res);
    }
    // fetch(`api/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setTempleDetails(data));
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
      <Grid>
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
          <Divider />
          <CardActions>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary">
                  log in as:
                </Typography>
              </Grid>
              <Button
                sx={{ p: 2, fontWeight: 'bold', mr: 10 }}
                variant="contained"
                size="large"
              >
                Gabay
              </Button>{' '}
              <Button
                sx={{ p: 2, fontWeight: 'bold' }}
                variant="contained"
                size="large"
              >
                Users
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
