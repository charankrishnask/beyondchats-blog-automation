require("dotenv").config(); // ⭐ LOAD ENV FIRST

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use("/api/articles", articleRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
