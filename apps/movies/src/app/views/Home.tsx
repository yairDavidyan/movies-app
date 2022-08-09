import { Grid, Stack } from '@mui/material';
import MoviesTable from '../components/MoviesTable';
import TempleSelect from '../components/TempleSelect';
import { moviesType } from '../interfaces/movies';

export function Home({ movies }: { movies: moviesType[] }) {
  // return <MoviesTable movies={movies} />;
  return <TempleSelect />;
}

export default Home;
