const bcrypt = require('bcrypt');

export default class Pessoa {

  constructor(nascimento: Date) {
    if (!nascimento) {
      throw new Error('A data de Nascimento é obrigatória');
    }
    this.nascimento = nascimento;
    // calcula a idade no momento que é criado já que a idade é requerida
    this.idade = this.calcularIdade(new Date());
  }

  name: String = "";
  id: Number = 0;
  avatar: String = "";
  imageUrl: String = "";
  idade: Number = 0;
  password = "";

  private nascimento: Date | null | undefined = null;

  // calcular a idade na data passada, default no construtor é a data atual
  calcularIdade = (data: Date): Number => {
    if (!this.nascimento) {
      return 0;
    }

    const dateNascimento = new Date(this.nascimento);
    let difference = data.getTime() - dateNascimento.getTime();

    const anos = (difference / 31556926) / 1000;
    return Math.floor(anos);
  }

  generatePassword = async () => {

    try {
      const hash = await bcrypt.hash(this.name, 10);

      this.password = hash
    } catch (error) {
      this.password = "salada";
    }
  }
}
