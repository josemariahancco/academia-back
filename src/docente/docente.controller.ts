import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docenteService.create(createDocenteDto);
  }

  @Get()
  findAll() {
    return this.docenteService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.docenteService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docenteService.update(term, updateDocenteDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.docenteService.remove(term);
  }
}
