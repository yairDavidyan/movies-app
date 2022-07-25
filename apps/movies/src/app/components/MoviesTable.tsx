import React from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { moviesType } from '../interfaces/movies';

function MoviesTable({ movies }: { movies: moviesType[] }) {
  const fields = Object.keys(movies[0]);
  const columns: GridColDef[] = fields.map((movie) => {
    return movie !== 'image'
      ? {
          field: movie,
          headerName: movie,
          minWidth: 150,
        }
      : {
          field: movie,
          headerName: movie,
          minWidth: 150,
          renderCell: (movie: GridCellParams) => {
            return <img src={movie.value} alt="img" />;
          },
        };
  });

  return (
    <div style={{ height: 400 }}>
      <DataGrid rows={movies} columns={columns} />
    </div>
  );
}

export default MoviesTable;
