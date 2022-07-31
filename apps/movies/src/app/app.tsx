import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router';
import { Home } from './views/Home';
import { useEffect, useState } from 'react';
import { moviesType } from './interfaces/movies';
import { CssBaseline } from '@mui/material';
import MovieDetails from './components/MovieDetails';
import Layout from './views/Layout';
import MatrixHall from './components/MatrixHall';
import MatrixAdmin from './components/MatrixAdmin';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  const [allMovies, setAllMovies] = useState<moviesType[]>([]);

  useEffect(() => {
    fetch('/api/movie')
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={allMovies.length > 0 && <Home movies={allMovies} />}
          />
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="hall" element={<MatrixHall />} />
          <Route path="hall-admin" element={<MatrixAdmin />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
