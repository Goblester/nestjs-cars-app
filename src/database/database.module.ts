import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'yourcar',
      entities: [],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
  controllers: [],
})
export class DatabaseModule {
  constructor(connection: DataSource) {
    if (connection.isInitialized) {
      console.log('DB Connected Successfully');
    }
  }
}
