interface INotification {
  enviar(mensagem: string): void;
}

class Sms implements INotification {
  enviar(mensagem: string): void {
    console.log("SMS enviado " + mensagem);
  }
}

class Email implements INotification {
  enviar(mensagem: string): void {
    console.log("Email enviado " + mensagem);
  }
}

class PushNotification implements INotification {
  enviar(mensagem: string): void {
    console.log("Push enviado " + mensagem);
  }
}

class NotificationFactory {
  static criar(tipo: string): INotification {
    switch (tipo) {
      case "sms":
        return new Sms();
      case "email":
        return new Email();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Tipo de notificação inválido");
    }
  }
}

class NotificationSingleton {
  private static instance: NotificationSingleton;


  private constructor() {}

  static getInstance(): NotificationSingleton {
    if (!NotificationSingleton.instance) {
      NotificationSingleton.instance = new NotificationSingleton();
    }
    return NotificationSingleton.instance;
  }

  enviar(tipo: string, mensagem: string): void {
    const notificacao = NotificationFactory.criar(tipo);
    notificacao.enviar(mensagem);
  }
}


console.log("===== TESTE SINGLETON =====");
const s1 = NotificationSingleton.getInstance();
const s2 = NotificationSingleton.getInstance();

console.log("Mesma instância?", s1 === s2); // true

console.log("\n===== TESTE FACTORY =====");
const n1 = NotificationFactory.criar("sms");
n1.enviar("Teste SMS");

const n2 = NotificationFactory.criar("email");
n2.enviar("Teste Email");

const n3 = NotificationFactory.criar("push");
n3.enviar("Teste Push");

console.log("\n TESTE SERVICE  ");
s1.enviar("sms", "Mensagem via Singleton");
s1.enviar("email", "Mensagem via Singleton");
s1.enviar("push", "Mensagem via Singleton");
