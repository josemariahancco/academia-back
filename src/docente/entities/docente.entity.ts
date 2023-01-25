import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
@Schema()
export class Docente extends Document {
    @Prop()
    Nombre:string;

    @Prop()
    Apellidos:string;

    @Prop({
        unique:true,
        index:true,
    })
    Dni:string;

    @Prop({
        
    })
    Celular:string

    @Prop()
    FormacionAcademica:string;

}
export const DocenteSchema = SchemaFactory.createForClass(Docente);