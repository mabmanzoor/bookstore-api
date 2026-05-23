# Bookstore API

## Project Overview
This is a simple RESTful API for a bookstore built using Node.js and Express.js.  
The API performs CRUD operations on books.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- GitHub
- Postman

---

## How To Run The Project

1. Open project folder in CMD

2. Run:

```bash
..\node.exe app.js

3. Open browser:

http://localhost:3000/books


---

## API Endpoints

### Get All Books
GET /books

### Get Single Book
GET /books/:id

### Create Book
POST /books

### Update Book
PUT /books/:id

### Delete Book
DELETE /books/:id

---

## Sample JSON Data

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 20,
  "isbn": "1234567890",
  "publishedDate": "2018-10-16"
}
```
Live API deployed on Vercel.

---

## Live API

https://bookstore-api-kappa.vercel.app/books

---

## GitHub Repository

https://github.com/mabmanzoor/bookstore-api