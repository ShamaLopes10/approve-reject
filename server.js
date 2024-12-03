const express = require('express');
const bodyParser = require('body-parser');
const requestRoutes = require('./routes/requestRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/requests', requestRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.sync();  // Sync models with the database
});

