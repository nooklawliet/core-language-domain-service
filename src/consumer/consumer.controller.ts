import { Controller, Logger } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}
  private readonly logger = new Logger(ConsumerController.name);

  @MessagePattern('topic_name')
  async consumeMessage(@Payload() payload: any) {
    this.consumerService.handleMessage(payload);
  }
}
