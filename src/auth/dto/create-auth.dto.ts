
import { IsEmail, IsString, Length, MaxLength, MinLength } from "class-validator";


export class CreateAuthDto {
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
    @IsEmail()
    @MinLength(0)
    Correo:string;
    @MinLength(4)
    @MaxLength(16)
    Password:string;

}
