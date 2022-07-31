import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from '../DTO/userDto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getData() {
    return this.userService.getData();
  }
  @Get(':id')
  getDataById(@Param('id') id: string) {
    return this.userService.getDataById(id);
  }
  @Post()
  addUser(@Body() newUser: userDto) {
    this.userService.addUser(newUser);
    return 'added success';
  }
  @Put(':id')
  updateUser(@Body() updateUser: userDto, @Param('id') id: string) {
    this.userService.updateUser(id, updateUser);
    return 'updated success';
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
    return 'delet success';
  }
}
