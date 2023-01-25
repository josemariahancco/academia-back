import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaAcademicaService } from './ficha-academica.service';
import { CreateFichaAcademicaDto } from './dto/create-ficha-academica.dto';
import { UpdateFichaAcademicaDto } from './dto/update-ficha-academica.dto';

@Controller('ficha-academica')
export class FichaAcademicaController {
  constructor(private readonly fichaAcademicaService: FichaAcademicaService) {}

  @Post()
  create(@Body() createFichaAcademicaDto: CreateFichaAcademicaDto) {
    return this.fichaAcademicaService.create(createFichaAcademicaDto);
  }

  @Get()
  findAll() {
    return this.fichaAcademicaService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.fichaAcademicaService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateFichaAcademicaDto: UpdateFichaAcademicaDto) {
    return this.fichaAcademicaService.update(term, updateFichaAcademicaDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.fichaAcademicaService.remove(term);
  }
}
