import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name);

  async handleMessage(payload: any) {
    this.logger.debug(`payload:`, payload);
  }
}
