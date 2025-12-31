require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Health check (optional but helpful)
app.get("/", (req, res) => {
  res.send("BeyondChats Backend is running 🚀");
});

// Routes
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
