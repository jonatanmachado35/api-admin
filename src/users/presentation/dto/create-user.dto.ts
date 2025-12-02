import { IsEmail, IsNotEmpty, IsString, IsUUID, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;

  @IsUUID()
  roleId: string;

  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, { message: 'document must be a valid CPF (11 digits) or CNPJ (14 digits)' })
  document: string;

  @IsNotEmpty()
  @IsString()
  pix: string;
}
