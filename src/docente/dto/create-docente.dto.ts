import { IsString, Length, MinLength } from "class-validator";

export class CreateDocenteDto {
    @IsString()
    @MinLength(0)
    Nombre:string;
    @IsString()
    @MinLength(0)
    Apellidos:string;
    @IsString()
    @Length(8)
    Dni:string;
    @IsString()
    @Length(9)
    Celular:string
    @IsString()
    @MinLength(0)
    FormacionAcademica:string;
}
