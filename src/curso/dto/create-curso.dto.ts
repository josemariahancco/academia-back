import { IsString, MinLength } from "class-validator";

export class CreateCursoDto {
    @IsString()
    @MinLength(0)
    Nombre:string;
}
