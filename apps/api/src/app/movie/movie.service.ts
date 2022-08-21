import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { moviesDto } from '../DTO/movieDto.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>
  ) {}

  getData(): Promise<Movie[]> {
    return this.movieRepository.find();
  }
  getDataById(id: string) {
    return this.movieRepository.findOne({ where: { id: +id } });
  }
  async addMovies(addMovies: moviesDto) {
    const res = await this.movieRepository.save(addMovies);
    return res;
  }
  updateMovies(id: string, updateMovie: moviesDto) {
    return this.movieRepository.update(+id, updateMovie);
  }
  deleteMovie(id: string) {
    return this.movieRepository.delete(+id);
  }
}
