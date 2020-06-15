# Project 1: Full-Stack Website

By Freshta Bashari, SEI '20
## Book-Shelf, an Book collection app
A Book-Shelf is a varied categories of books. On Book-Shelf, a user can sign up to create, edit and view their categpories of books. inside each category they can add books and delete a books. 

## Scope
In this project, we fulfilled all core requirements. Our website has:
- Full CRUD on linked database model defined by Mongoose schema
- 7 RESTful routes for model
- User authentication and authorization using sessions and bcrypt 
- Front-end data validation
- Templating using the EJS view engine
- Responsive front-end styling using Bootstrap CSS
- Deployment to Heroku

## Technologies Used
- Front-end: React, Bootstrap, CSS, HTML,
- Back-end: Mongoose, MongoDB, Express, Node.js
- Dependencies: bcyptjs, body-parser, connect-mongo, ejs, express, express-session, method-override, mongoose

## User Stories
- User creates an account
- User logs in
- User logs out
- User add a Category
- User can edit and delete a Category
- User can add a book inside a category
- User can delete a Book


## Wireframes
During our planning, we used figma to create wireframes for each page.
1. Home Page   
<img src="./readme/Home.png" height=350>
2. Log In  
<img src="./readme/Login.png" height=350>
3. Register  
<img src="./readme/Register.png" height=350>
4. Profile  
<img src="./readme/Profile.png" height=350>
5. All Categories  
<img src="./readme/All-Category.png" height=350>
6. Edit Category  
<img src="./readme/Edit-Category.png" height=350>
7. New Category  
<img src="./readme/Add-Category.png" height=350>
8. New Book  
<img src="./readme/Add-Book.png" height=350>
9. View Book  
<img src="./readme/Show-Book.png" height=350>




## Data Models
Imagerie uses 2 linked models
1. Users: one-to-many relationship with Books
2. Categories: one-to-many relationship with user
2. Books: many-to-one relationship with user

<img src="./readme/ERD.png">

