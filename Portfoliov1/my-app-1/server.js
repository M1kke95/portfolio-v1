import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import fs from 'node:fs/promises'
import { getProjectData, updateProjectData } from './lib'

const app = new Hono();



app.use("/*", cors());

const habits = [
  {
    id: crypto.randomUUID(),
    title: "Game",
    createdAt: new Date("2024-01-01"),
  },
];

app.get("/json", async (c) => {
  const data = getProjectData();
  const dataAsJson = JSON.parse(data)
  return c.json(dataAsJson);
});


app.post("/add", async (c) => {
  const newHabit = await c.req.json();
  const data = await getProjectData();

  data.push(newHabit)
  await updateProjectData(data);
  console.log(newHabit);  habits.push({ id: crypto.randomUUID(), createdAt: new Date(), ...newHabit });

  return c.json(habits, { status: 201 });
});

app.get("/", (c) => {
  return c.json(habits);
});

const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});


