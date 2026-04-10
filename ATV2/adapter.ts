import { INotification } from "../Types/INotification";
import { ExternalSmsAPI } from "./legado";
export class SmsAdapter implements INotification {
  private api = new ExternalSmsAPI();

  enviar(mensagem: string, account: string): void {
    // account aqui será tratado como telefone
    this.api.sendMessage(account, mensagem);
  }
}
