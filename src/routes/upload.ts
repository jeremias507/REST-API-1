import { Router } from "express";
import multerMiddleware from "../middleware/file";
import { authJwt } from "../middleware/session";
import { getFile } from "../controllers/upload";
const router = Router();

router.post("/",authJwt ,multerMiddleware.single("myfile"),getFile );
export { router };
