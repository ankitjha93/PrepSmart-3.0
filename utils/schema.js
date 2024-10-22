
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
   id: serial('id').primaryKey(),
   jsonMockResp: text('jsonMockResp').notNull(),
   jobPosition: varchar('jobPosition', { length: 255 }).notNull(),
   jobDescription: varchar('jobDescription', { length: 255 }).notNull(),
   jobExperience: varchar('jobExperience', { length: 255 }).notNull(),
   createdBy: varchar('createdBy', { length: 255 }).notNull(),
   createdAt: varchar('createdAt', { length: 255 }).notNull(),
   mockID: varchar('mockID', { length: 255 }).notNull()
});


export const UserAnswer = pgTable('userAnswer',{
   id: serial('id').primaryKey(),
   mockIDRef:varchar('mockID', { length: 255 }).notNull(),
   question:varchar('question').notNull(),
   correctAns:text('correctAns'),
   userAns:text('userAns'),
   feedback:text('feedback'),
   rating:varchar('rating'),
   userEmail:varchar('userEmail'),
   createdAt:varchar('createdAt'),
})