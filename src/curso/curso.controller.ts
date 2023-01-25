import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.cursoService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(term, updateCursoDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.cursoService.remove(term);
  }
}
