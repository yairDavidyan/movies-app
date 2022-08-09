import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  city: string;

  @Column('text')
  street: string;

  @Column('text')
  nosach: string;

  @Column('text')
  image: string;

  @Column('int')
  length_man: number;

  @Column('int')
  width_man: number;

  @Column('int')
  length_woman: number;

  @Column('int')
  width_woman: number;

  @Column('text', { array: true })
  sketch_man: number[][];

  @Column('text', { array: true })
  sketch_woman: number[][];

  // @ManyToOne(() => User, (user) => user.movies)
  // user: User;
}
