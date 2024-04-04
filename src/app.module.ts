import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubWebhooksModule } from './github-webhooks/github-webhooks.module';
import { SummarizerService } from './summarizer/summarizer.service';
import { SummarizerController } from './summarizer/summarizer.controller';

@Module({
  imports: [GithubWebhooksModule],
  controllers: [AppController, SummarizerController],
  providers: [AppService, SummarizerService],
})
export class AppModule {}
