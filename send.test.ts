import test from "node:test";
import assert from "node:assert/strict";
import { NotificationFactory } from "./ATV1/factory";
import { TipoNotificacao } from "./Types/TipoNotificacao";

// ================= TESTE ENVIO =================
test("Notificações devem enviar sem erro", () => {
  const sms = NotificationFactory.criar(TipoNotificacao.SMS);
  const email = NotificationFactory.criar(TipoNotificacao.EMAIL);
  const push = NotificationFactory.criar(TipoNotificacao.PUSH);
  const externo = NotificationFactory.criar(TipoNotificacao.SMS_EXTERNO);

  assert.doesNotThrow(() => {
    sms.enviar("Teste SMS", "123456789");
    email.enviar("Teste Email", "user@email.com");
    externo.enviar("teste api antiga", "9999999999")
    push.enviar("Teste Push", "Push")
  });
});
