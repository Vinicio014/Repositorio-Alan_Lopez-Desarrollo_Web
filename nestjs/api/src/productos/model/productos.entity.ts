import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsNotEmpty, IsString, MinLength, IsNumber, Min } from 'class-validator';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre: string;

  @Column({ nullable: true })
  @IsString()
  descripcion?: string;

  @Column('decimal')
  @IsNumber()
  @Min(0.01, { message: 'El precio debe ser mayor que 0' })
  precio: number;

  @Column('int')
  @IsNumber()
  @Min(0, { message: 'El stock debe ser mayor o igual a 0' })
  stock: number;

  @CreateDateColumn()
  fechaCreacion: Date;
}
