import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router';
import MatrixAdmin from './components/MatrixAdmin';
import TempleDetails from './components/TempleDetails';
import TempleRegistration from './components/TempleRegistration';
import { Home } from './views/Home';
import Layout from './views/Layout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="temple/:id" element={<TempleDetails />} />
          <Route path="hall-admin/:id" element={<MatrixAdmin />} />
          <Route path="temple-registration" element={<TempleRegistration />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
