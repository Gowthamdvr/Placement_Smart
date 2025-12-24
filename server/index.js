require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'placemate_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    // Create tables if they don't exist
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM('admin', 'student') DEFAULT 'student',
            name VARCHAR(255),
            cgpa DECIMAL(3, 2),
            backlogs INT DEFAULT 0
        )
    `;

    db.query(createUsersTable, (err) => {
        if (err) console.error('Error creating users table:', err);
        else console.log('Users table ready');
    });

    const createCompaniesTable = `
        CREATE TABLE IF NOT EXISTS companies (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            role VARCHAR(255),
            package VARCHAR(255),
            location VARCHAR(255),
            description TEXT,
            eligibility_cgpa DECIMAL(3, 2),
            eligibility_backlogs INT
        )
    `;

    db.query(createCompaniesTable, (err) => {
        if (err) console.error('Error creating companies table:', err);
        else console.log('Companies table ready');
    });
});

// Basic Route
app.get('/', (req, res) => {
    res.send('PlaceMate Server is running');
});

// API Endpoints (Examples)
app.get('/api/companies', (req, res) => {
    db.query('SELECT * FROM companies', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
