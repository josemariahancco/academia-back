import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';

import { hash,compare } from 'bcrypt';
import { Model } from 'mongoose';
import { AdministradorService } from 'src/administrador/administrador.service';
import { DocenteService } from 'src/docente/docente.service';
import { Docente } from 'src/docente/entities/docente.entity';



import { CreateAuthDto } from './dto/create-auth.dto';

import { LoginAuthDto } from './dto/loginAuth.dto';

@Injectable()
export class AuthService {
  
  constructor( readonly docenteService: DocenteService,readonly administradosService: AdministradorService) {}

  async registerDocente(createAuthDto: CreateAuthDto) {
    const {Password}=createAuthDto;
    const PlaintoHash=await hash(Password,10);
    createAuthDto={...createAuthDto,Password:PlaintoHash}
    return this.docenteService.create(createAuthDto)
    
  }

  async login(loginAuthDto:LoginAuthDto) {
    // var findUser=new CreateAuthDto();
    const {Correo,Password,Tipo}=loginAuthDto
    var data;
    var findUser;
    if (Tipo==1) {
      findUser= await this.docenteService.findOne(Correo)
      if(!findUser)throw new HttpException('USER_NOT_FOUND',404);
    } else if(Tipo==0) {
      findUser= await this.administradosService.findOne(Correo)
      if(!findUser)throw new HttpException('USER_NOT_FOUND',404);
    }
    
    const checkPassword=await compare(Password,findUser.Password)
    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT',403)
    data=findUser
    return data

  }

 
}
