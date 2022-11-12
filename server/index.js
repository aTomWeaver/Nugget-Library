import express from 'express';
import mongoose from 'mongoose';
import BookModel from './models/Book.js';

const app = express();

app.use(express.json())

mongoose.connect('mongodb+srv://nug:iLoveYouNugget2017@nuggetlibrary.yl6qith.mongodb.net/library?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

function addBook(bookObj) {
    app.get("/", async (req, res) => {
        const book = new BookModel(bookObj);
        try {
            await book.save();
        } catch (err) {
            console.log(err);
        }
    });
}

app.listen(3001, () => {
    console.log('running on port 3001');
});