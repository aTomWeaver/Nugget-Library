import mongoose, { mongo } from "mongoose";

const BookSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "author": {
        type: String,
        required: true
    },
    "genre": {
        type: String
    },
    "cover-type": {
        type: String
    },
    "series": {
        type: String
    },
    "number-in-series": {
        type: Number
    },
    "purchase-date": {
        type: Date
    },
    "completion-date": {
        type: String
    },
    "rating": {
        type: String
    },
    "audiobook": {
        type: String
    },
    "purchase-location": {
        type: String
    },
    "pages": {
        type: String
    },
    "amount-paid": {
        type: Number
    },
    "amount-retail": {
        type: Number
    },
    "amount-saved": {
        type: Number
    },
    "shelf": {
        type: String,
    },
    "sub-shelf": {
        type: String
    }
});

const Book = mongoose.model("Book", BookSchema);

export default Book;