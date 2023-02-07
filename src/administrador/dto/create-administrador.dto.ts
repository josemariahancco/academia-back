import { IsEmail, IsMobilePhone, IsNumberString, IsString,Length, length, MaxLength, MinLength } from "class-validator";


export class CreateAdministradorDto {
    @IsString()
    @MinLength(0)
    Nombre:string;
    @IsNumberString()
    @Length(8)
    Dni:string;
    @IsNumberString()
    @Length(9)
    Celular:string;
    @IsEmail()
    @MinLength(0)
    Correo:string;
    @MinLength(4)
    @MaxLength(16)
    Password:string;

}
