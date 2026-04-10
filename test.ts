
import { NotificationFactory } from "./ATV1/factory";
import { TipoNotificacao } from "./Types/TipoNotificacao";
import {NotificationSingleton} from "./ATV1/singleton";
// ================= TESTES =================
console.log("TESTE SINGLETON");
const s1 = NotificationSingleton.getInstance();
const s2 = NotificationSingleton.getInstance();
console.log("Mesma instância?", s1 === s2); // true

console.log("\n===== TESTE FACTORY =====");
const n1 = NotificationFactory.criar(TipoNotificacao.SMS);
n1.enviar("Teste SMS", "123456789");

const n2 = NotificationFactory.criar(TipoNotificacao.EMAIL);
n2.enviar("Teste Email", "user@email.com");

const n3 = NotificationFactory.criar(TipoNotificacao.PUSH);
n3.enviar("Teste Push", "user@email.com");

console.log("\nTESTE ADAPTER");
const n4 = NotificationFactory.criar(TipoNotificacao.SMS_EXTERNO);
n4.enviar("Mensagem via API externa", "11999999999");

console.log("\nTESTE PROXY + SINGLETON");
const singleton = NotificationSingleton.getInstance();

singleton.enviar(TipoNotificacao.SMS, "Mensagem com proxy", "123456789");
singleton.enviar(TipoNotificacao.EMAIL, "Mensagem com proxy", "user@email.com");
singleton.enviar(TipoNotificacao.SMS_EXTERNO, "Mensagem externa com proxy", "11999999999");

console.log("Falhando as reqs no proxy")

singleton.enviar(TipoNotificacao.SMS, "Mensagem com proxy", "123456789");
singleton.enviar(TipoNotificacao.SMS, "Mensagem com proxy", "123456789");
singleton.enviar(TipoNotificacao.SMS, "Mensagem com proxy", "123456789");
singleton.enviar(TipoNotificacao.SMS, "Mensagem com proxy", "123456789");

