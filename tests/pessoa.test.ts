import Pessoa from "../src/domain/pessoa";

test("[CONSTRUCTOR] PESSOA", async () => {
  const pessoa = new Pessoa(new Date(1981, 4, 25));
  expect(pessoa.name).toBe("");
});

test("[METHOD] PESSOA/calcularIdade-38", async () => {
  const pessoa = new Pessoa(new Date(1981, 4, 25));
  const dateAtual = new Date(2020, 1, 2);

  const idade = pessoa.calcularIdade(dateAtual);
  expect(idade).toBe(38);
});

test("[METHOD] PESSOA/calcularIdade-36", async () => {
  const pessoa = new Pessoa(new Date(1983, 5, 5));
  const dateAtual = new Date(2020, 1, 2);
  const idade = pessoa.calcularIdade(dateAtual);
  expect(idade).toBe(36);
});
