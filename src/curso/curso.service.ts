import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { json } from 'express';
import { Model } from 'mongoose';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectModel(Curso.name)
    private readonly cursoModel:Model<Curso>
  ){}
  async create(createCursoDto: CreateCursoDto) {
    createCursoDto.Nombre=createCursoDto.Nombre.toLowerCase();
    
    try {
      const curso=await this.cursoModel.create(createCursoDto);

      return curso;
      
    } catch (error) {
      if (error.code===11000) {
        throw new BadRequestException(` El pokermon ya existe en la BD${json(error)} `)
      } else {
        
      }
      
    }
  }

  async findAll() {
    try {
      const curso=await this.cursoModel.find();

      return curso;
      
    } catch (error) {
      throw new BadRequestException(json(error))  
    }
  }

  async findOne(term: string) {
    let curso:Curso;
    
    try {
      curso=await this.cursoModel.findOne({_id:term})
      return curso;
    }catch(error){
      return error.message.toJSON();
    }
  }

  async update(term: string, updateCursoDto: UpdateCursoDto) {
    const Curso= await this.findOne(term);
    if(updateCursoDto.Nombre){
      updateCursoDto.Nombre=updateCursoDto.Nombre.toLowerCase();
      
    }
    await Curso.updateOne(updateCursoDto,{new:true })

    return {...Curso.toJSON(),...updateCursoDto};
  }

  async remove(term: string) {
    
    try {
      await this.cursoModel.deleteOne({_id:term})
      return "1"
    }catch(error){
      return error.message.toJSON();
    }
  }
}
