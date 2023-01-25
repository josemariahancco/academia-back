import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Docente, DocenteSchema } from './entities/docente.entity';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService],
  imports: [MongooseModule.forFeature([
    { name: Docente.name, 
      schema:DocenteSchema}
  ])],

})
export class DocenteModule {}
