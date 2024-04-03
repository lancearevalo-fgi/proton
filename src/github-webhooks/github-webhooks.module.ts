import { Module } from '@nestjs/common';
import { GithubWebhookService } from './github-webhooks.service';
import { OctokitModule } from 'nestjs-octokit';
import { GithubWebhooksController } from './github-webhooks.controller';

@Module({
  providers: [GithubWebhookService],
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: 'my-github-token',
      },
    }),
  ],
  controllers: [GithubWebhooksController],
})
export class GithubWebhooksModule {}
