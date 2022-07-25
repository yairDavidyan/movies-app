import Header from '../components/Header';
import MoviesTable from '../components/MoviesTable';
import { moviesType } from '../interfaces/movies';

export function Home({ movies }: { movies: moviesType[] }) {
  return (
    <>
      <Header />
      <MoviesTable movies={movies} />
    </>
  );
}

export default Home;
