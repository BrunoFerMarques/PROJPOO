import { ExternalSmsAPI } from "../ATV2/legado";
import { NotificationProxy } from "../ATV2/proxy";
import { SmsAdapter } from "../ATV2/adapter";
import { TipoNotificacao } from "../Types/TipoNotificacao";
import {INotification} from "../Types/INotification";
// ================= IMPLEMENTAÇÕES =================
export class Sms implements INotification {
  enviar(mensagem: string, account: string): void {
    console.log(`SMS enviado: ${mensagem} para o número ${account}`);
  }
}

export class Email implements INotification {
  enviar(mensagem: string, account: string): void {
    console.log(`Email enviado: ${mensagem} para o email ${account}`);
  }
}

export class PushNotification implements INotification {
  enviar(mensagem: string, account: string): void {
    console.log(`Push enviado: ${mensagem} para ${account}`);
  }
}

export class NotificationFactory {
  static criar(tipo: TipoNotificacao): INotification {
    switch (tipo) {
      case TipoNotificacao.SMS:
        return new Sms();
      case TipoNotificacao.EMAIL:
        return new Email();
      case TipoNotificacao.PUSH:
        return new PushNotification();
      case TipoNotificacao.SMS_EXTERNO:
        return new SmsAdapter(); 
      default:
        throw new Error("Tipo de notificação inválido");
    }
  }
}

