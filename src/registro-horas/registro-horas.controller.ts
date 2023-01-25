import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroHorasService } from './registro-horas.service';
import { CreateRegistroHoraDto } from './dto/create-registro-hora.dto';
import { UpdateRegistroHoraDto } from './dto/update-registro-hora.dto';

@Controller('registro-horas')
export class RegistroHorasController {
  constructor(private readonly registroHorasService: RegistroHorasService) {}

  @Post()
  create(@Body() createRegistroHoraDto: CreateRegistroHoraDto) {
    return this.registroHorasService.create(createRegistroHoraDto);
  }

  @Get()
  findAll() {
    return this.registroHorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroHorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroHoraDto: UpdateRegistroHoraDto) {
    return this.registroHorasService.update(+id, updateRegistroHoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroHorasService.remove(+id);
  }
}
