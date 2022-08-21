import React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { moviesType } from '../interfaces/movies';
import { Box, CardMedia, IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import AddBoxIcon from '@mui/icons-material/AddBox';

function MoviesTable({ movies }: { movies: moviesType[] }) {
  const navigate = useNavigate();

  function rowDetails(row: moviesType) {
    navigate(`/details/${row.id}`);
  }
  const moviesKey = Object.keys(movies[0]);
  const fields = moviesKey.filter(
    (movie) => movie !== 'id' && movie !== 'image'
  );
  fields.unshift('image');
  fields.push('add');
  const columns: GridColDef[] = fields.map((movie) => {
    if (movie === 'add') {
      return {
        field: movie,
        headerName: '',
        disableColumnMenu: true,
        flex: 1,
        renderCell: (movie: GridCellParams) => {
          return (
            <IconButton
              aria-label="delete"
              size="large"
              onClick={(e) => e.stopPropagation()}
            >
              <AddBoxIcon fontSize="inherit" />
            </IconButton>
          );
        },
      };
    } else {
      return movie !== 'image'
        ? {
            field: movie,
            headerName: movie,
            minWidth: 50,
            flex: 1,
          }
        : {
            field: movie,
            headerName: movie,
            renderCell: (movie: GridCellParams) => {
              return (
                <CardMedia
                  component="img"
                  // height="40"
                  image={movie.value}
                  alt="img"
                />
              );
            },
          };
    }
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={movies}
        columns={columns}
        onRowClick={(data) => rowDetails(data.row)}
        hideFooter
        rowHeight={120}
      />
    </Box>
  );
}

export default MoviesTable;
