import mongoose, { Schema, model} from "mongoose";
import normalize from "normalize-mongoose";

const bookSchema = new Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    genre:{type: String, required: true},
    yearPublished:{type: Number, required: true},
    description:{type: String, required: true},
    pages:{type: Number},
    image: {type: String}

}, {timestamps: true});

bookSchema.plugin(normalize);

export const bookModel = model("book", bookSchema)
