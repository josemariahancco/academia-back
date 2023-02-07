
import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsInt, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";

export class LoginAuthDto  {
    @IsEmail()
    @MinLength(0)
    Correo:string;
    @MinLength(4)
    @MaxLength(16)
    Password:string;
    @IsInt()
    @Min(0)
    @Max(1)
    @Type(()=>Number)
    Tipo:number;

}
