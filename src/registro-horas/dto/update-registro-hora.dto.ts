import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroHoraDto } from './create-registro-hora.dto';

export class UpdateRegistroHoraDto extends PartialType(CreateRegistroHoraDto) {}
