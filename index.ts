import { Application, Router, RouterContext } from "https://deno.land/x/oak@v6.1.0/mod.ts";

const PORT = 1337;

const app = new Application();

const router = new Router();

router.get("/test", (context: RouterContext) => {
  context.response.status = 200;
  context.response.body = Math.random();
});

app.use(router.routes());

console.log(`Listening on port ${PORT}...`);
await app.listen(`localhost:${PORT}`);
