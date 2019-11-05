const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

require('./services/passport');
require('./models/User');

mongoose.connect(`mongodb://localhost:27017`);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);