require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const userRoutes = require("./routes/user.routes");

const app = express();

// Connect to MongoDB
connectdb();

// Middleware
app.use(cors());


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running! 🚀",
    endpoints: {
      signup: "POST /api/signup",
      login: "POST /api/login",
      profile: "GET /api/profile (requires token)"
    }
  });
});

// User routes (signup + login)
app.use("/api", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`
  });
});

// Start server
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 API available at: http://localhost:${PORT}`);
  console.log(`📚 API docs: http://localhost:${PORT}/`);
});