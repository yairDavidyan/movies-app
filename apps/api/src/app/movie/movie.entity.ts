import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  time: string;

  @Column('int')
  rate: number;

  @Column('text')
  image: string;

  @Column('int')
  price: number;

  @Column('text')
  description: string;

  @Column('text', { array: true })
  category: string[];

  @ManyToOne(() => User, (user) => user.movies)
  user: User;
}
