import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { ProductDTO } from "./dto/product.dto";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private products: Repository<ProductEntity>
  ) { }

  async list() {
    return await this.products.find({
      relations: {
        user: true
      }
    })
  }

  async create(product) {
    await this.products.save(product)
  }
}