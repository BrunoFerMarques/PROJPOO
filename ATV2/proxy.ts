import { INotification } from "../Types/INotification"
export class NotificationProxy implements INotification {
  private real: INotification;
  private tentativas = 0;
  private limite = 3;

  constructor(real: INotification) {
    this.real = real;
  }

  enviar(mensagem: string, account: string): void {

    if (this.tentativas >= this.limite) {
      console.log("Bloqueado: limite de tentativas atingido");
      return;
    }

    
    if (!this.temPermissao()) {
      console.log("Acesso negado");
      return;
    }

    console.log("Enviando notificação...");

    this.real.enviar(mensagem, account);

    this.tentativas++;
  }

  private temPermissao(): boolean {
    return true; 
  }
}