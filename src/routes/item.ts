import {
  getItem,
  getItems,
  updateItem,
  postItem,
  deleteItem,
} from "../controllers/item";
import { Router } from "express";
import { logMiddleware } from "../middleware/log";
import { authJwt } from "../middleware/session";

const router = Router();
router.get("/",authJwt,getItems);
router.get("/:id",getItem);
router.post("/",authJwt,postItem);
router.put("/:id",updateItem);
router.delete("/:id",deleteItem);



export { router };
