import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

@Global()
@Injectable()
export class PrismaProvider extends PrismaClient implements OnModuleInit, OnModuleDestroy {
      constructor() {
        const connectionString = `${process.env.DATABASE_URL}`
        const adapter = new PrismaPg({ connectionString });
        super({ adapter });
      }
    onModuleInit() {
        this.$connect();
    }

    onModuleDestroy() {
        this.$disconnect();
    }
}
