import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { json } from 'node:stream/consumers';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Administrador } from './entities/administrador.entity';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectModel(Administrador.name)
    private readonly administradorModel:Model<Administrador>
  ){}
  async create(createAdministradorDto: CreateAdministradorDto) {
    createAdministradorDto.Nombre=createAdministradorDto.Nombre.toLowerCase();
    createAdministradorDto.Dni=createAdministradorDto.Dni;
    createAdministradorDto.Celular=createAdministradorDto.Celular;
    createAdministradorDto.Correo=createAdministradorDto.Correo;
    try {
      const administrador=await this.administradorModel.create(createAdministradorDto);

      return administrador;
      
    } catch (error) {
      
        throw new BadRequestException(error)
      
      
    }
  }

  async findAll() {
    try {
      const administrador=await this.administradorModel.find();

      return administrador;
      
    } catch (error) {
      throw new BadRequestException(json(error))  
    }
  }

  async findOne(term: string) {
    let administrador:Administrador;
    
    try {
      administrador=await this.administradorModel.findOne({_id:term})
      return administrador;
    }catch(error){
      return error.message.toJSON();
    }
  }

  async update(term: string, updateAdministradorDto: UpdateAdministradorDto) {

    const Administrador= await this.findOne(term);
    if(updateAdministradorDto.Nombre){
      updateAdministradorDto.Nombre=updateAdministradorDto.Nombre.toLowerCase();
      updateAdministradorDto.Dni=updateAdministradorDto.Dni;
      updateAdministradorDto.Celular=updateAdministradorDto.Celular;
      updateAdministradorDto.Correo=updateAdministradorDto.Correo;
    }
    await Administrador.updateOne(updateAdministradorDto,{new:true })

    return {...Administrador.toJSON(),...updateAdministradorDto};
  }

  async remove(term: string) {

    const Administrador= await this.findOne(term);
    try {
      await this.administradorModel.remove(Administrador)
      return "1"
    }catch(error){
      return error.message.toJSON();
    }
     
  }
}
