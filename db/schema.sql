-- MySQL Schema

-- Create Database
CREATE DATABASE burger_db;
USE burger_db;

-- Create burger table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);