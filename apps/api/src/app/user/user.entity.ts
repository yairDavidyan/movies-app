import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Movie } from '../movie/movie.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @OneToMany(() => Movie, (movie) => movie.name)
  movies: Movie[];
}
