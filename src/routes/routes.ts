import express from 'express';
import Funcionario from '../domain/funcionario';
const faker = require('faker');
// define date locale para Brasil
faker.locale = "pt_BR";

const router = express.Router();

// const pessoas: Pessoa[] = [];
const funcionarios: Funcionario[] = [];

router.get('/pessoas', async (request, response) => {

  return response.json({ pessoas: await fakePeoples() });
});

router.get('/funcionarios', async (request, response) => {
  return response.json({ funcionarios: await fakePeoples() });
});

// melhorar depois. devolver um template talvez
router.get("/", (_, res) => {
  const textoRetorno = `
  <h2>Hello ts-node!</h2>
  <h3>rotas disponíveis:</h3>
  <a href="/funcionarios">/funcionarios</a> <br>
  <a href="/users">/usuários</a> <br>
  <a href="/pessoas">/pessoas</a> <br>
  `
  res.send(textoRetorno);
});

router.get("/users", async (_, res) => {

  return res.json({ users: await fakePeoples() });
});

async function fakePeoples() {
  for (let index = 0; index < 9; index++) {
    let funcionario = new Funcionario(new Date(1981, 3, 25));
    funcionario.name = faker.name.findName();
    funcionario.avatar = faker.image.avatar();
    funcionario.imageUrl = faker.image.imageUrl();
    funcionario.id = index + 1;
    await funcionario.generatePassword()
    funcionarios.push(funcionario);
  }

  return funcionarios;
}

export default router;