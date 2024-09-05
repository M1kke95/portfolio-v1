import { z } from "zod";


export const HabitSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  image: z.string()
});