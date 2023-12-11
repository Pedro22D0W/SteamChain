CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    poster VARCHAR(255),
    trailer VARCHAR(255),
    about TEXT,
    wallet VARCHAR(255),
    price INT,
    publisher INT,
    FOREIGN KEY (publisher) REFERENCES users(id)
);