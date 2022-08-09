import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router';
import { Home } from './views/Home';
import { useEffect, useState } from 'react';
import { moviesType } from './interfaces/movies';
import { CssBaseline } from '@mui/material';
import TempleDetails from './components/TempleDetails';
import Layout from './views/Layout';
import MatrixHall from './components/MatrixHall';
import MatrixAdmin from './components/MatrixAdmin';
import TempleRegistration from './components/TempleRegistration';

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
          <Route path="temple/:id" element={<TempleDetails />} />
          <Route path="hall" element={<MatrixHall />} />
          <Route path="hall-admin" element={<MatrixAdmin />} />
          <Route path="temple-registration" element={<TempleRegistration />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
