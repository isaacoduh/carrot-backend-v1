import { IsEmail, Length } from "class-validator";

export class CreateAccountDto {
  @IsEmail()
  email: string;

  @Length(6, 12)
  password: string;
}
