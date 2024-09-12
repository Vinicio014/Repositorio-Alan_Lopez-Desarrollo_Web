use productos;

create table products (
  id CHAR(36) NOT NULL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NULL,
  precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
  stock INT NOT NULL CHECK (stock >= 0),
  fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

select * from products;