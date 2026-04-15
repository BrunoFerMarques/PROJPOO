import test from "node:test";
import assert from "node:assert/strict";
import { NotificationFactory } from "./factory";
import { TipoNotificacao } from "../Types/TipoNotificacao";
test("Factory deve criar notificações corretamente", () => {
  const sms = NotificationFactory.criar(TipoNotificacao.SMS);
  const email = NotificationFactory.criar(TipoNotificacao.EMAIL);
  const push = NotificationFactory.criar(TipoNotificacao.PUSH);

  assert.ok(sms);
  assert.ok(email);
  assert.ok(push);
});