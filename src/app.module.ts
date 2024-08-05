import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessoModule } from './processo/processo.module';

@Module({
  imports: [ProcessoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
