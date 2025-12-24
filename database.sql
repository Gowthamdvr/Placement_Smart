-- Create the database
CREATE DATABASE IF NOT EXISTS placemate_db;
USE placemate_db;

-- Users table for both students and admins
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'student') DEFAULT 'student',
    name VARCHAR(255),
    cgpa DECIMAL(3, 2),
    backlogs INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Companies table for placement opportunities
CREATE TABLE IF NOT EXISTS companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255),
    package VARCHAR(255),
    location VARCHAR(255),
    description TEXT,
    eligibility_cgpa DECIMAL(3, 2),
    eligibility_backlogs INT,
    deadline DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Applications table to track student requests
CREATE TABLE IF NOT EXISTS applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    company_id INT,
    status ENUM('applied', 'shortlisted', 'rejected', 'offered') DEFAULT 'applied',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Insert dummy data for testing
INSERT INTO users (email, password, role, name, cgpa, backlogs) VALUES 
('admin@placemate.com', 'admin123', 'admin', 'System Admin'),
('student@example.com', 'student123', 'student', 'John Doe', 8.5, 0);

INSERT INTO companies (name, role, package, location, description, eligibility_cgpa, eligibility_backlogs) VALUES 
('Google', 'Software Engineer', '30 LPA', 'Bangalore', 'Work on world-class search technology.', 8.0, 0),
('Microsoft', 'Product Manager', '25 LPA', 'Hyderabad', 'Build the future of productivity.', 7.5, 0),
('Amazon', 'SDE-1', '22 LPA', 'Chennai', 'Scale global e-commerce systems.', 7.0, 1);
