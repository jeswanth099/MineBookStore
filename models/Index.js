const sequelize = require('../config/database');
const Book = require('./Book');

const db = {
    sequelize,
    Book
};

module.exports = db;
