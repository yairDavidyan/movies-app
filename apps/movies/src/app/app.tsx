import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router';
import { Home } from './views/Home';
import { useEffect, useState } from 'react';
import { moviesType } from './interfaces/movies';
import { CssBaseline } from '@mui/material';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  const [allMovies, setAllMovies] = useState<moviesType[]>([]);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setAllMovies(data));
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route
          path="/"
          element={allMovies.length > 0 && <Home movies={allMovies} />}
        />
        <Route path="details/:id" element={<MovieDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
