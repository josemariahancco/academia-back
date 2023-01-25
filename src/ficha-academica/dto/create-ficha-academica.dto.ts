import { IsString, MinLength } from "class-validator";

export class CreateFichaAcademicaDto {
    @IsString()
    @MinLength(0)
    CargaAcademica:string;
    @IsString()
    @MinLength(0)
    ubicacion:string;
}
