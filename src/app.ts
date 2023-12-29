import dotenv from "dotenv" 
import express from "express"
import cors from "cors"
import morgan from "morgan"
import itemRouters from "./routes/index"
import { connectDb } from "./config/mongo"
import cookieParser  from "cookie-parser"
import bodyParser  from "body-parser"

dotenv.config();
const PORT = process.env.PORT || 3001
const app = express()
app.use(cors({ credentials: true})) 
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(itemRouters)
app.use(bodyParser.json())
connectDb()
app.listen(PORT,()=>console.log(`Listen on port ${PORT}`))