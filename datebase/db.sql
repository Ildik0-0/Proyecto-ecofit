CREATE DATABASE ecofit;

USE ecofit;

CREATE TABLE cliente(

    id INT(11) NOT NULL,
    nom_cliente CHAR(30) NOT NULL,
    apellido_cliente CHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL,
    telefono CHAR(50) NOT NULL,
    direccion_cliente VARCHAR(50) NOT NULL,
    rut_cliente VARCHAR(50) NOT NULL,
    email_cliente VARCHAR(320) NOT NULL,
    contacto_cliente CHAR(50) NOT NULL,

);

ALTER TABLE cliente
    ADD PRIMARY KEY (id);

ALTER TABLE cliente
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;   

CREATE TABLE venta(

    id INT(11) NOT NULL
    

);