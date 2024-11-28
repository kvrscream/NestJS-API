import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userRepository: UsuarioRepository) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    try {
      const hasEmail = await this.userRepository.findByEmail(value);
      console.log({ hasEmail });
      return hasEmail !== undefined;
    } catch (err) {
      throw new Error('Method not implemented.');
    }
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error('E-mail já cadastrado em outro usuário!');
  }
}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
  return (objeto: Object, proriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: proriedade,
      options: validationOptions,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
