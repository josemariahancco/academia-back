import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargaAcademicaService } from './carga-academica.service';
import { CreateCargaAcademicaDto } from './dto/create-carga-academica.dto';
import { UpdateCargaAcademicaDto } from './dto/update-carga-academica.dto';

@Controller('carga-academica')
export class CargaAcademicaController {
  constructor(private readonly cargaAcademicaService: CargaAcademicaService) {}

  @Post()
  create(@Body() createCargaAcademicaDto: CreateCargaAcademicaDto) {
    return this.cargaAcademicaService.create(createCargaAcademicaDto);
  }

  @Get()
  findAll() {
    return this.cargaAcademicaService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.cargaAcademicaService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateCargaAcademicaDto: UpdateCargaAcademicaDto) {
    return this.cargaAcademicaService.update(term, updateCargaAcademicaDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.cargaAcademicaService.remove(term);
  }
}
