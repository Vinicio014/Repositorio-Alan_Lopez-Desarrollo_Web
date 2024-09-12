import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './productos/productos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Yd]U(P/>.B',
      database: 'productos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      synchronize: true,
    }),
    ProductModule,
  ],
})

export class AppModule {}
