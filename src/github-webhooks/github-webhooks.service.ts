// github-webhook.service.ts
import { Injectable } from '@nestjs/common';
import { PullRequestEvent } from '@octokit/webhooks-types';

@Injectable()
export class GithubWebhookService {
  handlePullRequestEvent(payload: PullRequestEvent) {
    console.log({ payload });

    return null;
  }
}
