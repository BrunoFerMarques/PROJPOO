export class TV {
  ligar(): void {
    console.log("TV ligada");
  }

  desligar(): void {
    console.log("TV desligada");
  }
}

export class Projetor {
  ligar(): void {
    console.log("Projetor ligado");
  }

  desligar(): void {
    console.log("Projetor desligado");
  }
}

export class Receiver {
  ligar(): void {
    console.log("Receiver ligado");
  }

  desligar(): void {
    console.log("Receiver desligado");
  }

  configurarSom(): void {
    console.log("Som configurado");
  }
}

export class PlayerMidia {
  ligar(): void {
    console.log("Player ligado");
  }

  reproduzir(midia: string): void {
    console.log(`Reproduzindo: ${midia}`);
  }

  parar(): void {
    console.log("Parando reprodução");
  }

  desligar(): void {
    console.log("Player desligado");
  }
}

export class LuzAmbiente {
  diminuir(): void {
    console.log("Luz diminuída");
  }

  acender(): void {
    console.log("Luz acesa");
  }
}

export class SistemaSom {
  ligar(): void {
    console.log("Sistema de som ligado");
  }

  desligar(): void {
    console.log("Sistema de som desligado");
  }
}