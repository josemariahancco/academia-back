import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFichaAcademicaDto } from './dto/create-ficha-academica.dto';
import { UpdateFichaAcademicaDto } from './dto/update-ficha-academica.dto';
import { FichaAcademica } from './entities/ficha-academica.entity';

@Injectable()
export class FichaAcademicaService {
  constructor(
    @InjectModel(FichaAcademica.name)
    private readonly fichaAcademicaModel:Model<FichaAcademica>
  ){}
  async create(createFichaAcademicaDto: CreateFichaAcademicaDto) {
    createFichaAcademicaDto.CargaAcademica=createFichaAcademicaDto.CargaAcademica;
    createFichaAcademicaDto.ubicacion=createFichaAcademicaDto.ubicacion;
    
    try {
      const fichaAcademica=await this.fichaAcademicaModel.create(createFichaAcademicaDto);

      return fichaAcademica;
      
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
      const ficha=await this.fichaAcademicaModel.find();

      return ficha;
      
    } catch (error) {
      throw new BadRequestException(error.toJSON())  
    }
  }

  async findOne(term: string) {
    let fichaAcademica:FichaAcademica;
    
    try {
      fichaAcademica=await this.fichaAcademicaModel.findOne({_id:term})
      return fichaAcademica;
    }catch(error){
      return error.message.toJSON();
    }
  }

  async update(term: string, updateFichaAcademicaDto: UpdateFichaAcademicaDto) {
    const fichaAcademica= await this.findOne(term);
    if(updateFichaAcademicaDto.CargaAcademica){
      updateFichaAcademicaDto.CargaAcademica=updateFichaAcademicaDto.CargaAcademica;
      updateFichaAcademicaDto.ubicacion=updateFichaAcademicaDto.ubicacion;
      
    }
    await fichaAcademica.updateOne(updateFichaAcademicaDto,{new:true })

    return {...fichaAcademica.toJSON(),...updateFichaAcademicaDto};
  }

  async remove(term: string) {
    try {
      await this.fichaAcademicaModel.deleteOne({_id:term})
      return "1"
    }catch(error){
      return error.message.toJSON();
    }
  }
}
