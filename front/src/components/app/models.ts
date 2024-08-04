export class PontoTuristico {
    nome: string;
    imgs: string[];
    descricao: string;
  
    constructor(nome: string, imgs: string[], descricao: string) {
      this.nome = nome;
      this.imgs = imgs;
      this.descricao = descricao;
    }
  }
  
  export class Cidade {
    nome: string;
    pontos: PontoTuristico[];
  
    constructor(nome: string, pontos: PontoTuristico[]) {
      this.nome = nome;
      this.pontos = pontos;
    }
  }
  