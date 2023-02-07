import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

@Schema()
export class Administrador extends Document {
    @Prop()
    Nombre:string;

    @Prop()
    Apellidos:string;

    @Prop({
        unique:true,
        index:true,
    })
    Dni:string;

    @Prop()
    Celular:string;

    @Prop({
        unique:true,
        index:true,
    })
    Correo:string;

    @Prop()
    Password:string;

}
export const AdministradorSchema = SchemaFactory.createForClass(Administrador);