import { Grid, IconButton, Menu, MenuItem } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';

import React, { useState } from 'react';
import { Matrix } from '../interfaces/matrix';
const ITEM_HEIGHT = 48;
const options = ['Box', 'Seat', 'Hall', 'Door'];

function MatrixAdmin() {
  const [cell, setCell] = useState<any[][]>([
    [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentPlace, setCurrentPlace] = React.useState<Matrix>({
    col: 0,
    row: 0,
  });

  const open = Boolean(anchorEl);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    i: number,
    j: number
  ) => {
    const temp = {
      row: i,
      col: j,
    };
    setCurrentPlace(temp);
    setAnchorEl(event.currentTarget);
  };

  function selectCell(option: string) {
    const copy = [...cell];
    copy[currentPlace?.row][currentPlace?.col] = 1;
    setCell(copy);
    console.log(currentPlace, option);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  function menu(i: number, j: number) {
    return (
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => selectCell(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    );
  }

  return (
    <div>
      {cell.map((row, i) => (
        <Grid container justifyContent="center" key={i}>
          {row.map((col, j) => (
            <>
              <IconButton
                key={j}
                aria-label="fingerprint"
                color="secondary"
                sx={{
                  border: '1px solid white',
                  m: 2,
                }}
                onClick={(e) => handleClick(e, i, j)}
              >
                {col === 0 && <GridAddIcon />}
                {col === 1 && <span>pl</span>}
                {col === 2 && <span>ha</span>}
                {col === 3 && <span>bo</span>}
                {col === 4 && <span>do</span>}
              </IconButton>
              {menu(i, j)}
            </>
          ))}
        </Grid>
      ))}
    </div>
  );
}

export default MatrixAdmin;
