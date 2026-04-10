import { NotificationProxy } from "../ATV2/proxy";
import { NotificationFactory } from "./factory";
import { TipoNotificacao } from "../Types/TipoNotificacao";

export class NotificationSingleton {
  private static instance: NotificationSingleton;
  private proxyMap: Map<string, NotificationProxy> = new Map();

  private constructor() {}

  static getInstance(): NotificationSingleton {
    if (!NotificationSingleton.instance) {
      NotificationSingleton.instance = new NotificationSingleton();
    }
    return NotificationSingleton.instance;
  }

  enviar(tipo: TipoNotificacao, mensagem: string, account: string): void {
    let proxy = this.proxyMap.get(tipo);

    if (!proxy) {
      const notificacao = NotificationFactory.criar(tipo);
      proxy = new NotificationProxy(notificacao);
      this.proxyMap.set(tipo, proxy);
    }

    proxy.enviar(mensagem, account);
  }
}