import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SendIcon from '@mui/icons-material/Send';
import { Button, Grid } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import { useState } from 'react';
import { Temple } from '../interfaces/temple';

function MatrixHall({ templeDetails }: { templeDetails: Temple }) {
  const [cell, setCell] = useState<number[][]>(templeDetails.sketch_man);

  function selectCell(i: number, j: number, isSelect: number) {
    const copy = [...templeDetails.sketch_man];
    isSelect === 6 ? (copy[i][j] = 1) : (copy[i][j] = 6);
    setCell(copy);
  }
  console.log('cell', cell);

  return (
    <>
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
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Button endIcon={<SendIcon />}>continue to pay</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default MatrixHall;
