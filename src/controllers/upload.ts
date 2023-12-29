import { Request, Response } from "express";
import { RequestExt } from "../interface/req-ext";
import { Storage } from "../interface/storage";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils.ts/error.handler";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    
    const dataToRegister: Storage={
      fileName:`${file?.filename}`,
      idUser:`${user?.id}`,
      path:`${file?.originalname}`
      
    }
    const imageBuffer = file?.buffer
    const response = await registerUpload(dataToRegister,imageBuffer)
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };
