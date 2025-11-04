require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Sync models with DB
sequelize.sync({ alter: true })
  .then(() => console.log('Models synced'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.get('/health', () => {
  return res.status(200).json("App is running");
})
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
