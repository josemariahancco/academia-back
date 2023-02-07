import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/loginAuth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerDocente')
  registerDocente(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.registerDocente(createAuthDto);
  }
  @Post('login')
  Login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  
}
