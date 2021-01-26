-- MySQL Schema

-- Drop Database (If it exists)
DROP DATABASE IF EXISTS burger_db;

-- Create Database
CREATE DATABASE burger_db;
USE burger_db;

-- Create burgers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    consumed BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);