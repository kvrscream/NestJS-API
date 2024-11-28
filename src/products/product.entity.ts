import { UsuarioEntity } from "src/usuario/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity {

  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UsuarioEntity)
  @JoinColumn()
  user: UsuarioEntity

  @Column()
  name: string

  @Column({
    type: 'decimal'
  })
  price: number

  @Column({ nullable: true })
  image?: string

  @Column()
  description: string

}