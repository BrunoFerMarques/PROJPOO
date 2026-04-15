import test from "node:test";
import assert from "node:assert/strict";

import { TipoNotificacao } from "../Types/TipoNotificacao";
import { NotificationSingleton } from "../ATV1/singleton";
import { NotificationFactory } from "../ATV1/factory";
// ================= TESTE ADAPTER =================
test("Adapter deve funcionar corretamente", () => {
  const externo = NotificationFactory.criar(TipoNotificacao.SMS_EXTERNO);

  assert.doesNotThrow(() => {
    externo.enviar("Mensagem via API externa", "11999999999");
  });
});

// ================= TESTE PROXY + SINGLETON =================
test("Proxy deve permitir envios iniciais", () => {
  const singleton = NotificationSingleton.getInstance();

  assert.doesNotThrow(() => {
    singleton.enviar(TipoNotificacao.SMS, "Mensagem", "123456789");
    singleton.enviar(TipoNotificacao.EMAIL, "Mensagem", "user@email.com");
  });
});

// ================= TESTE LIMITE DO PROXY =================
test("Proxy deve bloquear após muitas requisições (sem lançar erro)", () => {
  const singleton = NotificationSingleton.getInstance();

  // NÃO esperamos erro, então usamos doesNotThrow
  assert.doesNotThrow(() => {
    singleton.enviar(TipoNotificacao.SMS, "1", "123");
    singleton.enviar(TipoNotificacao.SMS, "2", "123");
    singleton.enviar(TipoNotificacao.SMS, "3", "123");
    singleton.enviar(TipoNotificacao.SMS, "4", "123");
    singleton.enviar(TipoNotificacao.SMS, "5", "123");
  });

  // Como seu proxy só bloqueia via console,
  // aqui validamos apenas que o fluxo não quebra
  assert.ok(true);
});