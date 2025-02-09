const { Pool } = require('pg');  // Import the Pool class from 'pg'
require('dotenv').config();      // Load environment variables from .env file

// Create a new pool instance with connection parameters from the .env file
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Event listener for successful connection
pool.on('connect', () => {
    console.log('Connected to PostgreSQL database');
});

// Event listener for errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
