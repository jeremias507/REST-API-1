import { Router } from "express";
import { getItemsOrders} from "../controllers/order";
import { authJwt } from "../middleware/session";

const router = Router()

router.get("/",authJwt,getItemsOrders)
export {router}