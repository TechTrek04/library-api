import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBook,
  updateBook,
} from "../controllers/library_controllers.js";

//Create Book Router
const bookRouter = Router();

//Defining Route
bookRouter.get("/:id", getAllBook);
bookRouter.post("/", createBook);
bookRouter.patch("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

//exporting Router

export default bookRouter;
