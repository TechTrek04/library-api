import {bookModel} from '../models/library_model.js';

//create a new book
export const createBook = async (req, res, next) => {
    
       try {
         const {title, description} = req.body;
         const createBook = new bookModel({title,author,genre,yearPublished,description,pages});
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
 } 

//Update book details
export const updateBook = async (req, res, next) => {
    try {
      const{ id } = req.params;
      const { title, description } = req.body;
      const updateBook = await bookModel.findByIdAndUpdate(id,
        {title,author,genre,yearPublished,description,pages},{ new: true });
      res.status(201).json(updateBook);
  } catch (error) {
    next(error);
  }
};

//delete a book
export const deleteBook = async (req, res, next) => {
   try {
     const{id} = req.params;
     await bookModel.findByIdAndDelete(id);
     res.status(201).json({message:'Book Deleted!'})
   } catch (error) {
    next(error);
   }
}
