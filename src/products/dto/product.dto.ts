import { IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";


export class ProductDTO {
  @IsString()
  @IsNotEmpty({
    message: "Nome do produto precisa ser preenchido"
  })
  name: string

  @IsNotEmpty()
  user: number

  @IsNotEmpty({
    message: "Preço do produto precisa ser preenchido"
  })
  price: number

  @IsOptional()
  image?: string

  @IsNotEmpty({
    message: "Descrição do produto precisa ser preenchida"
  })
  description: string

}