const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/box-business';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const Inquiry = require('./models/Inquiry');

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newInquiry = new Inquiry({ name, email, company, message });
    await newInquiry.save();

    res.status(201).json({ message: 'Inquiry received successfully!', inquiry: newInquiry });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({ error: 'Failed to submit inquiry. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
