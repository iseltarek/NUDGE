import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthModule as BetterAuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from 'src/config/auth';

@Module({
  imports: [
    BetterAuthModule.forRootAsync({
      useFactory: () => {
        const authConfig = auth;
        return {
          auth: authConfig,
        };
      },
    }),
  ],
  exports: [BetterAuthModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
