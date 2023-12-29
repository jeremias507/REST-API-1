import { Request, Response } from "express";
import {JwtPayload} from "jsonwebtoken";
interface RequestExt extends Request{
  user?:string |JwtPayload ;
}

export const getItemsOrders = (req: RequestExt, res: Response) => {
  try {

    res.status(200).send({
      data:"ESTO SOLO LO VE LAS PERSONAS CON SESSION JWT",
      user:req.user
    })
  } catch (error) {
    res.status(400).send("NOT_SEND_MENSSAGE")
  }
};



