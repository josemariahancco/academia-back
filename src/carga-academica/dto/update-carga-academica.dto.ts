import { PartialType } from '@nestjs/mapped-types';
import { CreateCargaAcademicaDto } from './create-carga-academica.dto';

export class UpdateCargaAcademicaDto extends PartialType(CreateCargaAcademicaDto) {}
