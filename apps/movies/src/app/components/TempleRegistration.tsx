import {
  Button,
  Card,
  CardMedia,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Temple } from '../interfaces/temple';

function TempleRegistration() {
  const [uoloadImage, setUoloadImage] = useState();
  const [templeDetails, setTempleDetails] = useState<Temple>();
  const navigate = useNavigate();

  function uploadImage(files: any) {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'xzgqpnzr');
    Axios.post(
      'https://api.cloudinary.com/v1_1/dcwy7koij/image/upload',
      formData
    ).then((res) => {
      setUoloadImage(res.data.secure_url);
      fillTempleDetails('image', res.data.secure_url);
    });
  }

  function fillTempleDetails(key: string, value: any) {
    setTempleDetails({
      ...templeDetails,
      [key]: value,
    } as Temple);
  }
  function sizeCalculation(key: string, value: any) {
    if (value >= 0) {
      const matrixMan = Array(templeDetails?.length_man)
        .fill(+0)
        .map(() => Array(templeDetails?.width_man).fill(+0));
      const matrixWoman = Array(templeDetails?.length_woman)
        .fill(+0)
        .map(() => Array(templeDetails?.width_woman).fill(+0));
      setTempleDetails({
        ...templeDetails,
        [key]: value,
        sketch_man: matrixMan,
        sketch_woman: matrixWoman,
      } as Temple);
    }
  }
  function buttonDisabled() {
    return (
      templeDetails === undefined ||
      (templeDetails &&
        (Object.values(templeDetails).some((x) => x === '') ||
          Object.keys(templeDetails).length !== 8))
    );
  }
  console.log('temple', templeDetails);
  async function handleClick() {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify(templeDetails),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const templeID = await res.json();
    navigate(`/hall-admin/${templeID}`);
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '90vh' }}
    >
      <Grid style={{ width: '28%' }} spacing={12}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            variant="outlined"
            onChange={(e) => fillTempleDetails('name', e.target.value)}
          />
          <TextField
            label="City"
            variant="outlined"
            onChange={(e) => fillTempleDetails('city', e.target.value)}
          />
          <TextField
            label="Street"
            variant="outlined"
            onChange={(e) => fillTempleDetails('street', e.target.value)}
          />
          <Grid container justifyContent="space-between">
            <Grid item>
              <Stack>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ marginBottom: 1 }}
                >
                  <Typography variant="subtitle2" component="div">
                    עזרת גברים
                  </Typography>
                </Grid>
                <TextField
                  sx={{ marginBottom: 2, paddingRight: 2 }}
                  label="length"
                  variant="outlined"
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) =>
                    sizeCalculation('length_man', +e.target.value)
                  }
                />
                <TextField
                  sx={{ paddingRight: 2 }}
                  label="width"
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  variant="outlined"
                  onChange={(e) =>
                    sizeCalculation('width_man', +e.target.value)
                  }
                />
              </Stack>
            </Grid>
            <Grid item>
              <Stack>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ marginBottom: 1 }}
                >
                  <Typography variant="subtitle2" component="div">
                    עזרת נשים
                  </Typography>
                </Grid>
                <TextField
                  sx={{ marginBottom: 2 }}
                  label="length"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) =>
                    sizeCalculation('length_woman', +e.target.value)
                  }
                />
                <TextField
                  label="width"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={(e) =>
                    sizeCalculation('width_woman', +e.target.value)
                  }
                />
              </Stack>
            </Grid>
            <Grid item sx={{ marginTop: 2 }}>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                onChange={(e) => fillTempleDetails('nosach', e.target.value)}
              >
                <FormControlLabel
                  value="edotHamizrach"
                  control={<Radio />}
                  label="Edot hamizrach"
                />
                <FormControlLabel
                  value="sfarad"
                  control={<Radio />}
                  label="Sfarad"
                />
                <FormControlLabel
                  value="ashkenaz"
                  control={<Radio />}
                  label="Ashkenaz"
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Button variant="contained" component="label">
            Upload Image
            <input
              accept="image/*"
              type="file"
              hidden
              onChange={(e) => uploadImage(e.target.files)}
            />
          </Button>
          <Button
            // disabled={buttonDisabled()}
            onClick={handleClick}
            variant="contained"
            sx={{ padding: 2, marginTop: 3 }}
          >
            Create
          </Button>
        </Stack>
      </Grid>
      <Grid item spacing={6}>
        {uoloadImage && (
          <Card sx={{ marginLeft: 4 }}>
            <CardMedia
              component="img"
              height="550"
              alt="img"
              src={uoloadImage}
            />
          </Card>
        )}
      </Grid>
    </Grid>
  );
}

export default TempleRegistration;
