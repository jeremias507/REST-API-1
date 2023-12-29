import multer, { memoryStorage } from "multer";

const storage = memoryStorage();

const multerMiddleware = multer({ storage });

export default multerMiddleware;