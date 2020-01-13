// node-typescript/src/server.test.ts
import req from "supertest";
import server from "../src/server";

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.text).toBe(`
  Hello ts-node! <br>
  rotas disponíveis: <br>
  /funcionarios <br>
  /users <br>
  /pessoas <br>
  `);
});


test("[GET] /pessoas", async () => {
  const res = await req(server).get("/pessoas");
  expect(res.body.pessoas.lenght).not.toEqual(0);
});

test("[GET] /funcionarios", async () => {
  const res = await req(server).get("/funcionarios");

  expect(res.body.funcionarios.lenght).not.toEqual(0);
});
