import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Curso, CursoSchema } from './entities/curso.entity';

@Module({
  controllers: [CursoController],
  providers: [CursoService],
  imports: [MongooseModule.forFeature([
    { name: Curso.name, 
      schema:CursoSchema}
  ])],
})
export class CursoModule {}
