const { Book } = require('../models/Book');

// Create a Book
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Single Book
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Book
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        await book.update(req.body);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Book
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        await book.destroy();
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
