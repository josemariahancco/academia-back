import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isEmail } from 'class-validator';
import { json } from 'express';
import { Model } from 'mongoose';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';

@Injectable()
export class DocenteService {
  constructor(
    @InjectModel(Docente.name)
    private readonly docenteModel:Model<Docente>
  ){}
  async create(createDocenteDto: CreateDocenteDto) {
    createDocenteDto.Nombre=createDocenteDto.Nombre.toLowerCase();
    createDocenteDto.Apellidos=createDocenteDto.Apellidos.toLowerCase();
    createDocenteDto.Celular=createDocenteDto.Celular;
    createDocenteDto.Dni=createDocenteDto.Dni;
    createDocenteDto.FormacionAcademica=createDocenteDto.FormacionAcademica;
    
    try {
      const docente=await this.docenteModel.create(createDocenteDto);

      return docente;
      
    } catch (error) {
      if (error.code===11000) {
        throw new BadRequestException(` ${error} `)
      } else {
        throw new BadRequestException(error)
      }
      
    }
    
  }

  async findAll() {
    try {
      const docente=await this.docenteModel.find();

      return docente;
      
    } catch (error) {
      throw new BadRequestException(json(error))  
    }
  }

  async findOne(term: string) {
    let docente:Docente;
    
    try {
      
      if (isEmail(term)){
        docente=await this.docenteModel.findOne({Correo:term})
      }else
      {
        docente=await this.docenteModel.findOne({_id:term})
      }
      return docente;
    }catch(error){
      return error.message.toJSON();
    }
  }

  async update(term: string, updateDocenteDto: UpdateDocenteDto) {
    const Docente= await this.findOne(term);
    if(updateDocenteDto.Nombre){
      updateDocenteDto.Nombre=updateDocenteDto.Nombre.toLowerCase();
      updateDocenteDto.Apellidos=updateDocenteDto.Apellidos.toLowerCase();
      updateDocenteDto.Celular=updateDocenteDto.Celular;
      updateDocenteDto.Dni=updateDocenteDto.Dni;
      updateDocenteDto.FormacionAcademica=updateDocenteDto.FormacionAcademica;
      
    }
    await Docente.updateOne(updateDocenteDto,{new:true })

    return {...Docente.toJSON(),...updateDocenteDto};
  }

  async remove(term: string) {
    try {
      await this.docenteModel.deleteOne({_id:term})
      return "1"
    }catch(error){
      return error.message.toJSON();
    }
  }
}
