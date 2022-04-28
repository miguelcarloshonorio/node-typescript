import Funcionario from "../src/domain/funcionario";

test("[METHOD] FUNCIONARIO/calcularIdade-36", async () => {
  const pessoa = new Funcionario(new Date(1983, 5, 5));
  const dateAtual = new Date(2020, 1, 2);
  const idade = pessoa.calcularIdade(dateAtual);
  expect(idade).toBe(36);
});