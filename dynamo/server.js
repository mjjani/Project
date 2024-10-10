const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = 4000; // Updated port

// Middleware
app.use(cors()); // Enable Cross-Origin requests
app.use(express.json()); // Parse incoming JSON data

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

// Define Mongoose Schema and Model for Contact form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// POST route to handle form submission using req.body
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body; // Get data from request body

  // Validate that all fields are present
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  // Create a new Contact document
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save(); // Save the contact data to MongoDB
    res.status(201).send('Contact form data saved successfully!');
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).send('Error saving contact form data.');
  }
});

// Start the backend server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
