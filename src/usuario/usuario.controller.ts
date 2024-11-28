import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) { }

  @Get()
  async list(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.list();
  }

  @Get('/:id')
  async findById(@Param('id') id) {
    return this.usuarioRepository.findById(id)
  }

  @Post()
  async create(@Body() usuario) {
    await this.usuarioRepository.save(usuario);
    return usuario;
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() usuario) {
    return await this.usuarioRepository.updateUser(id, usuario);
  }
}
