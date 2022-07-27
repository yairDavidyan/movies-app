import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Dialog, Grid, Stack, Typography } from '@mui/material';

export default function Login({
  openDialog,
  setOpenDialog,
  setIsLogin,
  isLogin,
  setUserName,
}: {
  isLogin: boolean;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function checkLogin() {
    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);

        if (data.id) {
          setIsLogin(true);
          setUserName(data.name);
        } else if (data.statusCode === 401) {
          console.log('no');
        }
        setOpenDialog(false);
      });
  }

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <Stack
        padding={3}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '24ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container justifyContent="center" padding={2}>
          <Typography variant="h6">Login</Typography>
        </Grid>
        <TextField
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={checkLogin}
          variant="contained"
          sx={{ padding: 2, marginTop: 3 }}
        >
          Login
        </Button>
        {isLogin && (
          <Grid container justifyContent="center" padding={2}>
            <Typography color="red">Error valid!</Typography>
          </Grid>
        )}
      </Stack>
    </Dialog>
  );
}
