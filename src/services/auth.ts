import { User } from "../interface/user.interface";
import { encrypt, verified } from "../utils.ts/bcypt.handle";
import users from "../models/user";
import { createAccessToken } from "../utils.ts/jwt";
import { Response } from "express";

export const registerNewUser = async ({ username, email, password }: User) => {
  try {

    const checkIs = await users.findOne({ email });

    if (checkIs) return "The email is already in use";

    const hashedPassword = await encrypt(password);
    const newUser = new users({
      username,
      email,
      password: hashedPassword,
    });
    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id });

    return {
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      token,
    };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
};

export const loginUser = async ({ email, password }: User, res: Response) => {
  try {
    const userFound = await users.findOne({ email });

    if (!userFound) return "NOT_FOUND_USER";

    const isMatch = await verified(password, userFound.password);

    if (!isMatch) return "PASSWORD_INCORRECT";

    const token = await createAccessToken({ id: userFound._id });

    return {
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      token,
    };
  } catch (error) {
    console.error("Error:", error);
    throw new Error("INTERNAL_SERVER_ERROR");
  }
};
