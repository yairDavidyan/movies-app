import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDto } from '../DTO/userDto.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async getData(): Promise<User[]> {
    return await this.userRepository.find();
  }
  getDataById(id: string) {
    return this.userRepository.findOne({ where: { id: +id } });
  }
  addUser(addUser: userDto) {
    console.log('updateUser', addUser);
    this.userRepository.save(addUser);
  }
  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  updateUser(id: string, updateUser: userDto) {
    return this.userRepository.update(+id, updateUser);
  }
  deleteUser(id: string) {
    return this.userRepository.delete(+id);
  }
}
