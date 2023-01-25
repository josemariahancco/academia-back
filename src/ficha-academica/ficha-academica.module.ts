import { Module } from '@nestjs/common';
import { FichaAcademicaService } from './ficha-academica.service';
import { FichaAcademicaController } from './ficha-academica.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FichaAcademica, FichaAcademicaSchema } from './entities/ficha-academica.entity';

@Module({
  controllers: [FichaAcademicaController],
  providers: [FichaAcademicaService],
  imports: [MongooseModule.forFeature([
    { name: FichaAcademica.name, 
      schema:FichaAcademicaSchema}
  ])],
})
export class FichaAcademicaModule {}
