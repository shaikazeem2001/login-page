const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();

// Connect to MongoDB
connectdb();

// Middleware
app.use(cors({
  origin: "http://localhost:5180",  // frontend origin
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// User routes (signup + login)
app.use("/api", userRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
