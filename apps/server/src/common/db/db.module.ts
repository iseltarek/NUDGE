import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { db } from '.';

export const DRIZZLE = Symbol('drizzle-connection');

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DRIZZLE,
      useValue: db,
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
