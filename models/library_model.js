import { Schema, model} from "mongoose";

const bookSchema = new Schema({
    title:{type: String, required: true},
    author:{type: String, required: true},
    genre:{type: String, required: true},
    publishedYear:{type: Number, required: true},
    description:{type: String, required: true},
    pages:{type: Number, required: true},

}, {timestamps: true});

export const bookModel = model("book", bookSchema)