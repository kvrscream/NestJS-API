import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ProductEntity } from "src/products/product.entity";
import { UsuarioEntity } from "src/usuario/usuario.entity";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      entities: [
        UsuarioEntity,
        ProductEntity
      ],
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      logging: true,
      extra: {
        ssl: false,
      }
    }
  }
}
