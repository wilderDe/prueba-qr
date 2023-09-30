import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrModule } from './qr/qr.module';
import { SocketsModule } from './sockets/sockets.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [QrModule, SocketsModule],
})
export class AppModule {}
