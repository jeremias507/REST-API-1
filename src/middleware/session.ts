import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

export const authJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).send("NO_TIENES_UN_JWT_VALIDO");

    jwt.verify(token,"2424242dfss",(err:any,user:any)=>{
     if(err)return res.status(401).send("EL_TOKEN_NO_ES_VALIDO")
     req.user = user;
     next()
    })
    
  } catch (error) {
    console.log(error);
  }
};
