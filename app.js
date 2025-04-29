
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/Index');
const path = require('path');
const { Book } = require('./models/Index');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Home page - list all books
app.get('/', async (req, res) => {
    const books = await Book.findAll();
    res.render('index', { books });
});

// Show add book form
app.get('/add', (req, res) => {
    res.render('addBook');
});

// Add book
app.post('/add', async (req, res) => {
    await Book.create(req.body);
    res.redirect('/');
});

// Show edit form
app.get('/edit/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    res.render('editBook', { book });
});


// Edit book
app.post('/edit/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    await book.update(req.body);
    res.redirect('/');
});

// Delete book
app.post('/delete/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    await book.destroy();
    res.redirect('/');
});

// Database connection
db.sequelize.authenticate()
    .then(() => {
        console.log('Database connected...');
        return db.sequelize.sync();
    })
    .then(() => {
        console.log('Models synchronized...');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error('Error: ', err));
