import { Schema, model} from "mongoose";

const bookSchema = new Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    genre:{type: String, required: true},
    yearPublished:{type: Number, required: true},
    description:{type: String, required: true},
    pages:{type: Number},
    image: {type: String}

}, {timestamps: true});

export const bookModel = model("book", bookSchema)
