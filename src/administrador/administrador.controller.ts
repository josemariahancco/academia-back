import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.administradorService.findOne(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradorService.update(term, updateAdministradorDto);
  }

  @Delete(':term')
  remove(@Param('term') term: string) {
    return this.administradorService.remove(term);
  }
}
