use productos;

create table products (
  id CHAR(36) NOT NULL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NULL,
  precio DECIMAL(10,2) NOT NULL CHECK (precio > 0),
  stock INT NOT NULL CHECK (stock >= 0),
  fechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into products(id, nombre, descripcion, precio, stock, fechaCreacion) 
values ('550e8400-e29b-41d4-a716-446655440000', 'Producto A', 'Descripción de ejemplo', 100.00, 10, NOW());

select * from products;