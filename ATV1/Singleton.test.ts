import test from "node:test";
import assert from "node:assert/strict";
import { NotificationSingleton } from "./singleton";

// ================= TESTE SINGLETON =================
test("Singleton deve retornar a mesma instância", () => {
  const s1 = NotificationSingleton.getInstance();
  const s2 = NotificationSingleton.getInstance();

  assert.strictEqual(s1, s2);
});