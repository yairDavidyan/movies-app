import { Grid, Stack } from '@mui/material';
import MoviesTable from '../components/MoviesTable';
import TempleSelect from '../components/TempleSelect';
import { moviesType } from '../interfaces/movies';

export function Home({ movies }: { movies: moviesType[] }) {
  // return <MoviesTable movies={movies} />;
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '70vh' }}
    >
      <Grid item>
        <TempleSelect />
      </Grid>
    </Grid>
  );
}

export default Home;
