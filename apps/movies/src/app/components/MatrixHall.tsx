import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

function MatrixHall() {
  const [cell, setCell] = useState<number[][]>([
    [0, 2, 0, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function selectCell(i: number, j: number, isSelect: number) {
    const copy = [...cell];
    isSelect === 0 ? (copy[i][j] = 1) : (copy[i][j] = 0);
    setCell(copy);
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Typography variant="h4">Select seats</Typography>
        </Grid>
        <Grid item>
          <Button endIcon={<SendIcon />}>continue to pay</Button>
        </Grid>
      </Grid>
      <Grid sx={{ py: 4 }}>
        {cell.map((row, i) => (
          <Grid container justifyContent="center" key={i}>
            {row.map((col, j) => (
              <IconButton
                disabled={col === 2}
                key={j}
                aria-label="fingerprint"
                color="secondary"
                sx={{
                  border:
                    col === 0
                      ? '1px solid white'
                      : col === 1
                      ? '1px solid #ed1566'
                      : '1px solid grey',
                  m: 3,
                }}
                onClick={() => selectCell(i, j, col)}
              >
                {col === 0 && <AddIcon />}
                {col === 1 && <RemoveIcon />}
                {col === 2 && <ClearIcon />}
              </IconButton>
              // <span key={j}>{col}</span>
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        justifyContent="center"
        style={{
          backgroundColor: '#484343',
          height: '30px',
          width: '80%',
          marginLeft: 130,
        }}
      >
        <Typography variant="h6">creen</Typography>
      </Grid>
    </>
  );
}

export default MatrixHall;
