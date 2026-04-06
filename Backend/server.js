import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

app.use(express.json());

const uri = "mongodb+srv://anupamkatiyar934_db_user:V3TbdzsD20lyYJtr>@cluster0.g3upvv3.mongodb.net/";

mongoose.connect(uri)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});