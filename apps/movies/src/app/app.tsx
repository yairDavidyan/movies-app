import { ThemeProvider, createTheme } from '@mui/material/styles';
import movies from './movies';
import { Route, Routes } from 'react-router';
import { Home } from './views/Home';
import { useState } from 'react';
import { moviesType } from './interfaces/movies';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export function App() {
  const [allMovies, setAllMovies] = useState<moviesType[]>(movies);
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path="/" element={<Home movies={allMovies} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
