import { Body, Controller, Post } from '@nestjs/common';
import { SummarizerService } from './summarizer.service';

@Controller('summarizer')
export class SummarizerController {
  constructor(private readonly summarizerService: SummarizerService) {}

  @Post()
  async summarizePR(@Body() body: { prText: string }): Promise<string> {
    return this.summarizerService.summarizePR(body.prText);
  }
}
