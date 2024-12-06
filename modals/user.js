const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/miniproject
// mongoose.connect("mongodb://localhost:27017/miniproject");
const uri =
  "mongodb+srv://anas:anas@cluster0.z81xd8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri);
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
  message: String,
});

module.exports = mongoose.model("user", userSchema);
