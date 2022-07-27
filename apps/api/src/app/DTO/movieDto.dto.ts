import { IsString } from 'class-validator';

export class moviesDto {
  id: number;

  @IsString()
  name: string;

  time: string;
  rate: number;
  language: string[];
  image: string;
  price: number;
  description: string;
  category: string[];
}
