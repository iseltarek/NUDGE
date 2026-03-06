import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number').unique(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});
