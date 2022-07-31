import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import Login from './Login';

export default function Header({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // function nameUser(isLog: boolean) {
  //   return isLog ? 'name' : 'Guest';
  // }
  const [openDialog, setOpenDialog] = React.useState(false);
  const [userName, setUserName] = React.useState('guest');
  // const userNameHeader = React.useMemo(() => nameUser(isLogin), [isLogin]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {userName}
          </Typography>
          <Button color="inherit" onClick={() => setOpenDialog(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Grid container justifyContent="center" sx={{ padding: 4 }}>
        <Typography
          variant="h1"
          component="div"
          sx={{ fontWeight: 'bold' }}
          color="#ed1566"
        >
          Hall
        </Typography>
      </Grid> */}
      <Login
        isLogin={isLogin}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        setIsLogin={setIsLogin}
        setUserName={setUserName}
      />
    </Box>
  );
}
