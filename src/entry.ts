// node-typescript/src/entry.ts
import server from "./server";
const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});