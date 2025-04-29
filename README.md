 📚 Mini Bookstore Management System

A simple bookstore inventory app built with Node.js, Express, Sequelize ORM, and MySQL. It supports adding, viewing, editing, and deleting books using a clean HTML/CSS frontend with EJS templating.



 🚀 Features

- List all books with details
- Add a new book
- Edit book details
- Delete a book
- Simple and clean UI using EJS and CSS
- Sequelize ORM with MySQL



🧰 Tech Stack

- Backend: **Node.js**, **Express.js**
- Database: **MySQL**
- ORM: **Sequelize**
- Frontend: **HTML**, **CSS**, **EJS**



📦 Installation


   

1. Install dependencies:
   npm install
   

2. Create MySQL database:
   `sql
   CREATE DATABASE bookstore_db;
   

3. Update DB credentialsin config/database.js:
   
   const sequelize = new Sequelize('bookstore_db', 'your_mysql_username', 'your_mysql_password', {
       host: 'localhost',
       dialect: 'mysql'
   });
   

4. Start the app:
   node app.js
  

5. Visit the app
 
   http://localhost:3000
