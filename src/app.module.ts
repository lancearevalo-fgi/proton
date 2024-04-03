import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubWebhooksModule } from './github-webhooks/github-webhooks.module';

@Module({
  imports: [GithubWebhooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
