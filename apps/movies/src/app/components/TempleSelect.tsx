import {
  Autocomplete,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { OptionsTemple } from '../interfaces/temple';
import { templeMock } from './templeMock';

function TempleSelect() {
  const [temples, setTemples] = useState<OptionsTemple[]>([]);
  const [selectedTemple, setSelectedTemple] = useState<number>();
  const navigate = useNavigate();
  console.log('selectedTemple', selectedTemple);
  function handleClick() {
    navigate(`/temple/${selectedTemple}`);
  }

  useEffect(() => {
    const templesArr = templeMock.map((temple) => {
      return {
        id: temple.id,
        label: temple.name,
      };
    });
    setTemples(templesArr);
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
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
          onClick={handleClick}
          variant="contained"
          sx={{ padding: 2, marginTop: 3 }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default TempleSelect;
