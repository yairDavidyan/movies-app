import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { GridAddIcon } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';

function MatrixHall() {
  const [cell, setCell] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 5],
    [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 5],
    [1, 1, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 1, 5],
    [1, 1, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 1, 5],
    [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 5, 5, 5, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function selectCell(i: number, j: number, isSelect: number) {
    const copy = [...cell];
    isSelect === 6 ? (copy[i][j] = 1) : (copy[i][j] = 6);
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
              <Button
                disabled={col !== 1 && col !== 6}
                key={j}
                aria-label="fingerprint"
                color="secondary"
                sx={{
                  border:
                    col === 1 || col === 5
                      ? '1px solid #90caf9'
                      : col === 6
                      ? '1px solid #ed1566'
                      : '',
                }}
                onClick={() => selectCell(i, j, col)}
              >
                {col === 0 && <span>-</span>}
                {col === 1 && <GridAddIcon />}
                {col === 2 && <span>היכל</span>}
                {col === 3 && <span>תיבה</span>}
                {col === 4 && <span>דלת</span>}
                {col === 5 && <span>תפוס</span>}
                {col === 6 && <CheckCircleIcon sx={{ color: '#ed1566' }} />}
              </Button>
              // <span key={j}>{col}</span>
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MatrixHall;
