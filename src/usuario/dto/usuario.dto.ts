import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailValidator, UniqueEmail } from '../validations/email.validator';

export class UsuarioDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  password: string;
}
