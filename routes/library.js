import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook,
} from "../controllers/library_controllers.js";

//Create Book Router
const bookRouter = Router();

//Defining Route
bookRouter.get("/books", getAllBook);
bookRouter.post("/books", createBook);
bookRouter.get("/books/:id", getBookById);
bookRouter.patch("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

//exporting Router

export default bookRouter;
