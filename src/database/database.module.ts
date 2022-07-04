import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../components/cars/entities/car';

const DBConnectionModule =
  process.env.NODE_ENV === 'development'
    ? TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'yourcar',
        entities: [Car],
        synchronize: true,
      })
    : TypeOrmModule.forRootAsync({
        useFactory: () => ({
          type: 'mysql',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT) || 3306,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        }),
      });

@Module({
  imports: [DBConnectionModule],
  exports: [TypeOrmModule],
  controllers: [],
})
export class DatabaseModule {
  constructor(connection: DataSource) {
    if (connection.isInitialized) {
      console.log('DB Connected Successfully');
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('development');
    }
  }
}
