import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DocenteModule } from 'src/docente/docente.module';
import { AdministradorModule } from 'src/administrador/administrador.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [ DocenteModule,AdministradorModule ]
  
})
export class AuthModule {}
