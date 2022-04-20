create database TotemSystem;
use TotemSystem;

CREATE TABLE IF NOT EXISTS Usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255),
email VARCHAR(255),
senha VARCHAR(15)
);

INSERT INTO Usuario VALUES (null, 'admin', 'admin@admin.com', '12345678');