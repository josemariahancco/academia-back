import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { json } from 'express';
import { Model } from 'mongoose';
import { CreateCargaAcademicaDto } from './dto/create-carga-academica.dto';
import { UpdateCargaAcademicaDto } from './dto/update-carga-academica.dto';
import { CargaAcademica } from './entities/carga-academica.entity';

@Injectable()
export class CargaAcademicaService {
  constructor(
    @InjectModel(CargaAcademica.name)
    private readonly cargaModel:Model<CargaAcademica>
  ){}
  async create(createCargaAcademicaDto: CreateCargaAcademicaDto) {
    createCargaAcademicaDto.Docente=createCargaAcademicaDto.Docente;
    createCargaAcademicaDto.Curso=createCargaAcademicaDto.Curso;
    createCargaAcademicaDto.Ciclo=createCargaAcademicaDto.Ciclo.toLocaleUpperCase();
    createCargaAcademicaDto.Grupo=createCargaAcademicaDto.Grupo.toLocaleUpperCase();
    try {
      const cargaAcademica=await this.cargaModel.create(createCargaAcademicaDto);

      return cargaAcademica;
      
    } catch (error) {
      if (error.code===11000) {
        throw new BadRequestException(` ${error} `)
      } else {
        throw new BadRequestException(error.message)
      }
      
    }
  }

  async findAll() {
    try {
      const carga=await this.cargaModel.find();

      return carga;
      
    } catch (error) {
      throw new BadRequestException(json(error))  
    }
  }

  async findOne(term: string) {
    let cargaAcademica:CargaAcademica;
    
    try {
      cargaAcademica=await this.cargaModel.findOne({_id:term})
      return cargaAcademica;
    }catch(error){
      return error.message.toJSON();
    }
  }

  async update(term: string, updateCargaAcademicaDto: UpdateCargaAcademicaDto) {
    const CargaAcademica= await this.findOne(term);
    if(updateCargaAcademicaDto.Docente){
      updateCargaAcademicaDto.Docente=updateCargaAcademicaDto.Docente;
      updateCargaAcademicaDto.Curso=updateCargaAcademicaDto.Curso;
      updateCargaAcademicaDto.Ciclo=updateCargaAcademicaDto.Ciclo.toLocaleUpperCase();
      updateCargaAcademicaDto.Grupo=updateCargaAcademicaDto.Grupo.toLocaleUpperCase();
      
    }
    await CargaAcademica.updateOne(updateCargaAcademicaDto,{new:true })

    return {...CargaAcademica.toJSON(),...updateCargaAcademicaDto};
  }

  async remove(term: string) {
    try {
      await this.cargaModel.deleteOne({_id:term})
      return "1"
    }catch(error){
      return error.message.toJSON();
    }
  }
}
