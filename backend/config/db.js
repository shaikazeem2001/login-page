const mongoose = require('mongoose');

function connectdb() {
  mongoose.connect(
    'mongodb+srv://shaikazeem2069:VypMP7zpqc4P2bfH@cluster0.hbttkyw.mongodb.net/loginpage',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));
}

module.exports = connectdb;
