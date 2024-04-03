import { Controller, Post } from '@nestjs/common';
import { PullRequestEvent } from '@octokit/webhooks-types';
import { GithubWebhookService } from './github-webhooks.service';

@Controller('github-webhooks')
export class GithubWebhooksController {
  constructor(private readonly githubService: GithubWebhookService) {}

  @Post('/pr-test')
  async prTest(body: PullRequestEvent) {
    return this.githubService.handlePullRequestEvent(body);
  }
}
