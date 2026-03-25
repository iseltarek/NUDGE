import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { DRIZZLE } from '../../common/db/db.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../common/schema/index';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
@Controller('users')
export class UserController {
  constructor(@Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  async getProfile(@CurrentUser() req) {
    return req;
  }
}
