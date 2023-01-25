
import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { Curso } from "src/curso/entities/curso.entity";
import { Docente } from "src/docente/entities/docente.entity";
import { FichaAcademica } from "src/ficha-academica/entities/ficha-academica.entity";

@Schema()
export class CargaAcademica extends Document {
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Docente'})
    Docente:Docente;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Curso'})
    Curso:Curso;

    @Prop()
    Ciclo:string;

    @Prop()
    Grupo:string;
}
export const CargaAcademicaSchema = SchemaFactory.createForClass(CargaAcademica);

