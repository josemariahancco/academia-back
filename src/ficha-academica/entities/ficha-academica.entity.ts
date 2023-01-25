
import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document} from "mongoose";
import { CargaAcademica } from "src/carga-academica/entities/carga-academica.entity";
import { Curso } from "src/curso/entities/curso.entity";
import { Docente } from "src/docente/entities/docente.entity";

@Schema()
export class FichaAcademica extends Document {
    @Prop(
        {
            type:mongoose.Schema.Types.ObjectId, ref:'CargaAcademica',
            index:true,
        })
    CargaAcademica:CargaAcademica;

    @Prop()
    ubicacion:string;

    
}
export const FichaAcademicaSchema = SchemaFactory.createForClass(FichaAcademica);