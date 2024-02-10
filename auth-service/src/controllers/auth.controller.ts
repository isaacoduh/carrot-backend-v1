import { generateSalt, generatePassword } from "./../utils/password";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { CreateAccountDto } from "../dto/auth.dto";
import { User } from "../models/user.model";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const authPayload = plainToClass(CreateAccountDto, req.body);
  const validationError = await validate(authPayload, {
    validationError: { target: true },
  });

  if (validationError.length > 0) {
    return res.status(400).json(validationError);
  }

  const { email, password } = authPayload;
  const salt = await generateSalt();
  const userPassword = await generatePassword(password, salt);

  const checkExistingUser = await User.findOne({ email: email });

  if (checkExistingUser != null) {
    return res.status(400).json({ message: "Email exists already!" });
  }

  const result = await User.create({
    email: email,
    password: userPassword,
    salt: salt,
  });

  // otp point

  return res
    .status(201)
    .json({ message: "User Created Successfully", email: result.email });
};

export { signup };
