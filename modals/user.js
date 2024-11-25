const mongoose = require("mongoose");
// const uri =
//   "mongodb+srv://anas:anas@cluster0.z81xd8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect("mongodb://127.0.0.1:27017/miniproject");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
