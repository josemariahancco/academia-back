import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaAcademicaDto } from './create-ficha-academica.dto';

export class UpdateFichaAcademicaDto extends PartialType(CreateFichaAcademicaDto) {}
