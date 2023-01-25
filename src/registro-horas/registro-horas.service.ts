import { Injectable } from '@nestjs/common';
import { CreateRegistroHoraDto } from './dto/create-registro-hora.dto';
import { UpdateRegistroHoraDto } from './dto/update-registro-hora.dto';

@Injectable()
export class RegistroHorasService {
  create(createRegistroHoraDto: CreateRegistroHoraDto) {
    return 'This action adds a new registroHora';
  }

  findAll() {
    return `This action returns all registroHoras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroHora`;
  }

  update(id: number, updateRegistroHoraDto: UpdateRegistroHoraDto) {
    return `This action updates a #${id} registroHora`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroHora`;
  }
}
