import { Injectable } from '@nestjs/common';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarios: Repository<UsuarioEntity>
  ) { }
  // private usuarios: UsuarioEntity[] = [];

  async list() {
    return this.usuarios.find();
  }

  async findById(id: number) {
    return await this.usuarios.findOneBy({
      id
    })
  }

  async save(usuario) {
    console.log({ usuario })
    await this.usuarios.save(usuario);
  }

  async findByEmail(email: string) {
    return await this.usuarios.findOneBy({
      email
    });
  }

  async updateUser(id: number, user: Partial<UsuarioDTO>) {
    const data = await this.usuarios.update(id, user);

    return data;
  }
}
