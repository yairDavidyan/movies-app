import { IsString } from 'class-validator';

export class userDto {
  id: number;
  @IsString()
  name: string;
  password: string;
  email: string;
}
