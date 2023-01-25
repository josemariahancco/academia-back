import { IsString,Length, length, MinLength } from "class-validator";


export class CreateAdministradorDto {
    @IsString()
    @MinLength(0)
    Nombre:string;
    @IsString()
    @Length(8)
    Dni:string;
    @IsString()
    @Length(9)
    Celular:string;
    @IsString()
    @MinLength(0)
    Correo:string;

}
