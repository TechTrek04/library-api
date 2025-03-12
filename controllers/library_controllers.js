import {bookModel} from '../models/library_model.js';
import { addBookValidator } from '../validators/library_validators.js';

//create a new book
export const createBook = async (req, res, next) => {
    
       try {
        const { title, author, genre, yearPublished, description, pages } = req.body;
        const {error, value} = addBookValidator.validate({
          ...req.body,
          image: req.file.filename
        });
        if(error) {
          return res.status(422).json(error);
        }
         const createBook = new bookModel(value);
         await createBook.save();
         res.status(201).json(createBook);
       } catch (error) {
        next(error);
       }
};

//Get all books
export const getAllBook = async (req, res) => {
    try {
     const getBooks = await bookModel.find();
     res.status(201).json(getBooks);
    } catch (error) {
     next(error);
    }
 };


// Get book by ID
 export const getBookById = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id).exec();
    if (!book) return res.status(404).json({ message: "Student not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update book details
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete a book
export const deleteBook = async (req, res, next) => {
   try {
     const{id} = req.params;
     await bookModel.findByIdAndDelete(id).exec();
     res.status(200).json({message:'Book Deleted!'})
   } catch (error) {
    next(error);
   }
}
