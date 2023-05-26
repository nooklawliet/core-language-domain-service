import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrameworkModule } from '@stoodstill/domain-service-framework';
import { join } from 'path';
import { ConsumerModule } from './consumer/consumer.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    FrameworkModule.register({
      configPath: join(process.cwd(), 'assets', 'config'),
      zone: process.env.ZONE,
    }),
    ConsumerModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
