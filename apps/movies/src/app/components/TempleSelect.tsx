import {
  Autocomplete,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { OptionsTemple, Temple } from '../interfaces/temple';

function TempleSelect() {
  const [temples, setTemples] = useState<OptionsTemple[]>([]);
  const [selectedTemple, setSelectedTemple] = useState<number>();
  const navigate = useNavigate();
  function handleClick() {
    if (selectedTemple) {
      navigate(`/temple/${selectedTemple}`);
    }
  }

  useEffect(() => {
    fetch('api/movie')
      .then((res) => res.json())
      .then((data) => {
        const templesArr = data.map((temple: Temple) => {
          return {
            id: temple.id,
            label: `${temple.name} , ${temple.city}`,
          };
        });
        setTemples(templesArr);
      });
  }, []);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '70vh' }}
    >
      <Grid>
        <Stack sx={{ width: '100%' }}>
          <Grid container justifyContent="center" sx={{ marginBottom: 4 }}>
            <Typography variant="subtitle2" component="div">
              Select Temple
            </Typography>
          </Grid>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={temples}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Temple" />}
            onChange={(e, data) => setSelectedTemple(data ? data.id : 0)}
          />
          <Button
            disabled={selectedTemple === 0 || selectedTemple === undefined}
            onClick={handleClick}
            variant="contained"
            sx={{ padding: 2, marginTop: 3 }}
          >
            Submit
          </Button>
          {
            <Button
              onClick={() => navigate(`/temple-registration`)}
              variant="contained"
              sx={{ padding: 2, marginTop: 3 }}
            >
              Create Temple
            </Button>
          }
        </Stack>
      </Grid>
    </Grid>
  );
}

export default TempleSelect;
