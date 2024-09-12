import { IsString, IsNotEmpty, MinLength, IsNumber, Min, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Min(0.01, { message: 'El precio debe ser mayor que 0' })
  precio: number;

  @IsNumber()
  @Min(0, { message: 'El stock debe ser mayor o igual a 0' })
  stock: number;
}
