import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth";

export const register = async ({body}: Request, res: Response) => {
 
  try {
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return res.status(400).send("Missing required fields");
    }

    const response = await registerNewUser(body);
    if (response === "The email is already in use") {
      res.status(400).send(response);
    } else {
      const { token, ...responseData } = response;
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
      });
      res.status(200).send(responseData);
    }
  } catch (error) {
    console.error("error creating user:",error)
    res.status(500).send("ERROR_CREATE_USER");
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const response = await loginUser(req.body, res);
    if (response === "NOT_FOUND_USER" || response === "PASSWORD_INCORRECT") {
      res.status(400).send(response);
    } else {
      const { token, ...responseData } = response;
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
      });

      res.status(200).send(responseData);
    }
  } catch (error: string | any) {
    return res.status(500).send("INTERNAL_SERVER_ERROR");
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production", // Set to true in production
  });
  return res.status(200).send("exit logout");
};
