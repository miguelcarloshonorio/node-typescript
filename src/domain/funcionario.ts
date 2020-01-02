import Pessoa from "./pessoa";

export default class Funcionario extends Pessoa {
  admissao: Date | undefined;
  matricula: Number | undefined;

  getAdmissao = (): Date | undefined => {
    return this.admissao;
  }
  setAdmissao = (admissao: Date) => {
    this.admissao = admissao;
  }
}
