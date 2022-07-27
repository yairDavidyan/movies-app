import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { MovieService } from './movie.service';
import { moviesDto } from '../DTO/movieDto.dto';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getData() {
    return this.movieService.getData();
  }
  @Get(':id')
  getDataById(@Param('id') id: string) {
    return this.movieService.getDataById(id);
  }
  @Post()
  addMovie(@Body() newMovie: moviesDto) {
    this.movieService.addMovies(newMovie);
    return 'added success';
  }
  @Put(':id')
  updateMovie(@Body() updateMovie: moviesDto, @Param('id') id: string) {
    this.movieService.updateMovies(id, updateMovie);
    return 'updated success';
  }
  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    this.movieService.deleteMovie(id);
    return 'delet success';
  }
}
