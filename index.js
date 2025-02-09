const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables
const coastalRoutes = require('./routes/coastalroutes');
const errorHandler = require('./middleware/errorhandler');  // Import the error handler middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/coastal', coastalRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
