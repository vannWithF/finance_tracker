import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationController } from './authentication/authentication.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthenticationController],
  providers: [AppService],
})
export class AppModule {}
