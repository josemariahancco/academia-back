import { IsString, Length, MinLength } from "class-validator";
export class CreateCargaAcademicaDto {
    @IsString()
    @MinLength(0)
    Docente:string;
    @IsString()
    @MinLength(0)
    Curso:string;
    @IsString()
    @MinLength(0)
    Ciclo:string;
    @IsString()
    @MinLength(0)
    Grupo:string;
}
