import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Administrador, AdministradorSchema } from './entities/administrador.entity';

@Module({
  controllers: [AdministradorController],
  providers: [AdministradorService],
  imports: [MongooseModule.forFeature([
    { name: Administrador.name, 
      schema:AdministradorSchema}
  ])],
})
export class AdministradorModule {}
