import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { ProductEntity } from './products/product.entity';
import { ProductModule } from './products/product.module';
import { PostgresConfigService } from './config/postgres.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
    UsuarioModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
