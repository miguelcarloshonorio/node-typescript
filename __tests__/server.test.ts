// node-typescript/src/server.test.ts
import req from "supertest";
import server from "../src/server";

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.text).toBe(`
  <h2>Hello ts-node!</h2>
  <h3>rotas disponíveis:</h3>
  <a href="/funcionarios">/funcionarios</a> <br>
  <a href="/users">/usuários</a> <br>
  <a href="/pessoas">/pessoas</a> <br>
  `);
});

test("[GET] /pessoas", async () => {
  const res = await req(server).get("/pessoas");
  expect(res.body.pessoas.lenght).not.toEqual(0);
});

test;

test("[GET] /funcionarios", async () => {
  const res = await req(server).get("/funcionarios");

  expect(res.body.funcionarios.lenght).not.toEqual(0);
});

test("[GET] /funcionario undefined", async () => {
  const res = await req(server).get("/funcionarios/1");

  expect(res.body.funcionarios).toEqual(undefined);
});
