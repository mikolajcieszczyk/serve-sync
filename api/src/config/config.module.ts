import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      autoLoadEntities: false,
    }),
  ],
})
export class AppConfigModule {}
