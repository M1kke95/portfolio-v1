import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { getProjectData, updateProjectData } from './lib'
import { Project } from "./dataReader";

const app = new Hono();


app.use("/*", cors());


app.get("/", async (c) => {
  const data = await getProjectData();
  return c.json({data})
})


app.post("/", async (c) => {
  const body = await c.req.json<Project>();
  const data = await getProjectData();

  data.push(body)
  await updateProjectData(data);
  return c.json({ data }, 201);
});

const port = 3999;

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
