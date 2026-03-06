import { Controller, Inject } from '@nestjs/common';
import { DRIZZLE } from '../../common/db/db.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../common/schema/index';
@Controller('users')
export class UserController {
  constructor(@Inject(DRIZZLE) private db: NodePgDatabase<typeof schema>) {}
}
