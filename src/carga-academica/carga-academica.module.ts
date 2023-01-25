import { Module } from '@nestjs/common';
import { CargaAcademicaService } from './carga-academica.service';
import { CargaAcademicaController } from './carga-academica.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CargaAcademica, CargaAcademicaSchema } from './entities/carga-academica.entity';

@Module({
  controllers: [CargaAcademicaController],
  providers: [CargaAcademicaService],
  imports: [MongooseModule.forFeature([
    { name: CargaAcademica.name, 
      schema:CargaAcademicaSchema}
  ])],
})
export class CargaAcademicaModule {}
