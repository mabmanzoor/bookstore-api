const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use(bookRoutes);

app.get("/", (req, res) => {
  res.send("Bookstore API Working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});