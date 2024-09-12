import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './model/productos.entity';
import { CreateProductDto } from './dto/productos.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { nombre } = createProductDto;
    const existingProduct = await this.productRepository.findOneBy({ nombre });

    if (existingProduct) {
      throw new BadRequestException('El nombre del producto ya existe');
    }

    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async update(id: string, createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    this.productRepository.merge(product, createProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.delete(id);
  }
}
