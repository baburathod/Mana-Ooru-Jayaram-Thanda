import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mana-ooru';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.send('Mana Ooru Backend API is running!');
});

// Mock Route: Get Notices
app.get('/api/notices', (req, res) => {
  const mockNotices = [
    { title: "Panchayat Meeting Tomorrow", date: "April 25, 2026", desc: "All villagers are requested to attend the Gram Sabha meeting at 10 AM.", type: "Event" },
    { title: "Water Supply Update", date: "April 24, 2026", desc: "Water will be supplied to the eastern streets between 6 PM and 8 PM today.", type: "Utility" },
    { title: "Health Camp", date: "April 28, 2026", desc: "Free medical check-up at the local primary school. Please register your names.", type: "Health" }
  ];
  res.json(mockNotices);
});

// Mock Route: Submit Complaint
app.post('/api/complaints', (req, res) => {
  const { name, issue } = req.body;
  console.log(`New complaint received from ${name}: ${issue}`);
  
  // In a real app, we would save this to MongoDB here using a Mongoose model
  
  res.status(201).json({ 
    success: true,
    message: "Complaint submitted successfully",
    data: { name, issue }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
