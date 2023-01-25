import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CursoModule } from './curso/curso.module';
import { DocenteModule } from './docente/docente.module';
import { AdministradorModule } from './administrador/administrador.module';
import { FichaAcademicaModule } from './ficha-academica/ficha-academica.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CargaAcademicaModule } from './carga-academica/carga-academica.module';
import { RegistroHorasModule } from './registro-horas/registro-horas.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','public')
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-academia'),
    CursoModule,
    DocenteModule,
    AdministradorModule,
    FichaAcademicaModule,
    CargaAcademicaModule,
    RegistroHorasModule,
  ],
  
})
export class AppModule {}
