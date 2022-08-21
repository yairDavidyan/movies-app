import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('int', { array: true })
  sketch_man: number[][];

  @Column('int', { array: true })
  sketch_woman: number[][];

  // @ManyToOne(() => User, (user) => user.movies)
  // user: User;
}
