import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductDTO } from "./dto/product.dto";

@Controller('products')
export class ProductController {
  constructor(
    private productsRepository: ProductRepository
  ) { }

  @Get()
  async list() {
    return await this.productsRepository.list()
  }

  @Post()
  async create(@Body() product) {
    await this.productsRepository.create(product)
    return product
  }

}