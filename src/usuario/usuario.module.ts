import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailValidator } from './validations/email.validator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailValidator],
})
export class UsuarioModule { }
