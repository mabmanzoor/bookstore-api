const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRoutes");

const app = express();
// mongoose.connect(
//   "mongodb+srv://admin:admin1234@cluster0.or5vvd0.mongodb.net/bookstoreDB?retryWrites=true&w=majority"
// )
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

app.use(express.json());

app.use(bookRoutes);

app.get("/", (req, res) => {
  res.send("Bookstore API Working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});