import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { loginDto } from '../DTO/loginDto.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: any) {
    return req.user;
  }
}
