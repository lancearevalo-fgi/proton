import { Injectable } from '@nestjs/common';

@Injectable()
export class SummarizerService {
  async summarizePR(prText: string): Promise<string> {
    // Implement your AI PR summarization logic here
    // For this example, let's just return a dummy summary
    const dummySummary = `This is a sample summary for the given PR text: ${prText.slice(0, 50)}...`;
    return dummySummary;
  }
}
