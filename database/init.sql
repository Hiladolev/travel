CREATE DATABASE IF NOT EXISTS travel;
USE travel;
CREATE TABLE IF NOT EXISTS vacations (
    id INT NOT NULL AUTO_INCREMENT,
    destination VARCHAR(256) NOT NULL,
    description VARCHAR(256) NOT NULL,
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    price INT NOT NULL,
    image VARCHAR(256) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    role VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS followers (
    followerId INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    vacationId INT NOT NULL,
    PRIMARY KEY (followerId),
    CONSTRAINT FK_userId FOREIGN KEY (userId) REFERENCES users(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT FK_vacationId FOREIGN KEY (vacationId) REFERENCES vacations(id) ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO travel.users (firstName, lastName, email, password, role)
VALUES(
        'hila',
        'dolev',
        'hiladolev1@gmail.com',
        '12345678',
        'admin'
    )