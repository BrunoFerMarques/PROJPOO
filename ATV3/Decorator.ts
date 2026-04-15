// ================= INTERFACE =================
export interface Bebida {
  getDescricao(): string;
  getCusto(): number;
}

// ================= BEBIDAS BASE =================
export class CafeExpresso implements Bebida {
  getDescricao(): string {
    return "Café Expresso";
  }

  getCusto(): number {
    return 5.0;
  }
}

export class Cappuccino implements Bebida {
  getDescricao(): string {
    return "Cappuccino";
  }

  getCusto(): number {
    return 7.0;
  }
}

export class Cha implements Bebida {
  getDescricao(): string {
    return "Chá";
  }

  getCusto(): number {
    return 4.0;
  }
}

// ================= DECORATOR BASE =================
export abstract class BebidaDecorator implements Bebida {
  constructor(protected bebida: Bebida) {}

  getDescricao(): string {
    return this.bebida.getDescricao();
  }

  getCusto(): number {
    return this.bebida.getCusto();
  }
}

// ================= ADICIONAIS =================
export class Leite extends BebidaDecorator {
  getDescricao(): string {
    return this.bebida.getDescricao() + ", Leite";
  }

  getCusto(): number {
    return this.bebida.getCusto() + 2.0;
  }
}

export class Chantilly extends BebidaDecorator {
  getDescricao(): string {
    return this.bebida.getDescricao() + ", Chantilly";
  }

  getCusto(): number {
    return this.bebida.getCusto() + 3.0;
  }
}

class Canela extends BebidaDecorator {
  getDescricao(): string {
    return this.bebida.getDescricao() + ", Canela";
  }

  getCusto(): number {
    return this.bebida.getCusto() + 1.5;
  }
}

export class Chocolate extends BebidaDecorator {
  getDescricao(): string {
    return this.bebida.getDescricao() + ", Chocolate";
  }

  getCusto(): number {
    return this.bebida.getCusto() + 2.5;
  }
}

