import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook,
} from "../controllers/library_controllers.js";
import { remoteUpload } from "../middlewares/upload.js";

//Create Book Router
const bookRouter = Router();

//Defining Route
bookRouter.get("/books", getAllBook);
bookRouter.post("/books", remoteUpload.single('image'), createBook);
bookRouter.get("/books/:id", getBookById);
bookRouter.patch("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

//exporting Router

export default bookRouter;
