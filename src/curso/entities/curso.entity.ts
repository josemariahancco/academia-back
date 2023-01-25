import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
@Schema()
export class Curso extends Document {
    @Prop({
        unique:true
    })
    Nombre:string;

}
export const CursoSchema = SchemaFactory.createForClass(Curso);