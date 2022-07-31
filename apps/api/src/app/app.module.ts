import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HallController } from './hall/hall.controller';
import { HallModule } from './hall/hall.module';

@Module({
  imports: [
    MovieModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    HallModule,
  ],
  controllers: [AppController, HallController],
})
export class AppModule {}
