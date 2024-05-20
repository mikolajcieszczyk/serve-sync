import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sync-mysql',
      port: 3306,
      username: 'root',
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/../**/entities/*{.ts,.js}'],
      migrations: [
        __dirname + '/../**/migrations/*{.ts,.js}',
        __dirname + '/../**/seeds/*{.ts,.js}',
      ],
      synchronize: false,
      autoLoadEntities: false,
    }),
  ],
})
export class DatabaseModule {}
