import { Button, Grid, Menu, MenuItem } from '@mui/material';
import { GridAddIcon } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Matrix, OptionsHallType } from '../interfaces/matrix';
import { templeMock } from './templeMock';
const options: OptionsHallType = { Box: 3, Door: 4, Hall: 2, Seat: 1 };
const optionArr: (keyof OptionsHallType)[] = Object.keys(
  options
) as (keyof OptionsHallType)[];
console.log(optionArr);
const ITEM_HEIGHT = 48;

function MatrixAdmin() {
  const [cell, setCell] = useState<number[][]>(templeMock[0].sketch);
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
    setAnchorEl(event.currentTarget);
    setCurrentPlace(temp);
  };

  function selectCell(option: keyof OptionsHallType) {
    const copy = [...cell];

    copy[currentPlace?.row][currentPlace?.col] = options[option];
    setCell([...copy]);
    setAnchorEl(null);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        {optionArr.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Box'}
            onClick={() => selectCell(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {cell.map((row, i) => (
        <Grid container justifyContent="center" key={i}>
          {row.map((col, j) => (
            <div key={j}>
              <Button
                aria-label="fingerprint"
                color="secondary"
                sx={{
                  border: '1px solid white',
                }}
                onClick={(e) => handleClick(e, i, j)}
              >
                {col === 0 && <GridAddIcon />}
                {col === 1 && <span>כיסא</span>}
                {col === 2 && <span>היכל</span>}
                {col === 3 && <span>תיבה</span>}
                {col === 4 && <span>דלת</span>}
              </Button>
            </div>
          ))}
        </Grid>
      ))}
    </div>
  );
}

export default MatrixAdmin;
