CREATE TABLE clientes (
    id INT(11) NOT NULL,
    nom_cliente VARCHAR(50),
    apellido_cliente VARCHAR(50),
    telefono_cliente VARCHAR(50),
    direccion_cliente VARCHAR(50),
    rut_cliente VARCHAR(50),
    email_cliente VARCHAR(320),
    contacto_cliente VARCHAR(50),
    secreto VARCHAR(10) NOT NULL,
   PRIMARY KEY (id));

ALTER TABLE clientes
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;


CREATE TABLE proveedores(

    id INT(11) NOT NULL,
    nom_proveedor VARCHAR(30),
    telefono_proveedor VARCHAR(50),
    email_proveedor VARCHAR(50),
    direccion_proveedor VARCHAR(50),
    contacto_proveedor VARCHAR(50),
    articulo VARCHAR(30),
    cantidad_articulo INT(10),
    valor_compra DECIMAL(13,2),
    PRIMARY KEY (id)
    

);

ALTER TABLE proveedores
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;



CREATE TABLE productos (

    id INT(11) NOT NULL,
    nom_producto VARCHAR(30),
    descripcion VARCHAR(150),
    precio_producto DECIMAL(13,2),
    tipo_producto VARCHAR(30),
    stock_producto INT(30),
    proveedor_id INT(11),
    PRIMARY KEY (id),
    FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
);

ALTER TABLE productos
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE transportes (

     id INT(11) NOT NULL,
     nom_transporte VARCHAR(30),
     descripcion_transporte VARCHAR(150),
     PRIMARY KEY (id)
     
);

ALTER TABLE transportes
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;



CREATE TABLE envios(

    id INT(11) NOT NULL,
    fecha_envio DATE,
    transporte_id INT(11) NOT NULL,
    direccion_envio VARCHAR(30),
    PRIMARY KEY (id),
    FOREIGN KEY (transporte_id) REFERENCES transportes(id)

);

ALTER TABLE envios
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;





CREATE TABLE compras(

    id INT(11) NOT NULL, 
    fecha_compra DATE,
    valor_compra DECIMAL(13,2),
    producto_id INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
    
);

 ALTER TABLE compras
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

CREATE TABLE ventas(

    id INT(11) NOT NULL,
    fecha_venta DATE,
    valor_venta DECIMAL(13,2),
    modo_pago VARCHAR(10),
    producto_id INT(11),
    cliente_id INT(11),
    envio_id INT(11),
    PRIMARY KEY (id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (envio_id) REFERENCES envios(id)
    
);

ALTER TABLE ventas
    MODIFY id INT NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;




!--no agregar este codigo al menos que les salga un erro de Error: ER_NOT_SUPPORTED_AUTH_MODE: esto querie decir que las verciones no son compatibles -
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin'; 
