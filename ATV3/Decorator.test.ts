import test from "node:test";
import assert from "node:assert/strict";
import { CafeExpresso } from "./Decorator";
import { Leite } from "./Decorator";
import { Chocolate } from "./Decorator";
test("Deve calcular bebida com adicionais", () => {
  let bebida = new CafeExpresso();
  bebida = new Leite(bebida);
  bebida = new Chocolate(bebida);

  assert.equal(bebida.getDescricao(), "Café Expresso, Leite, Chocolate");
  assert.equal(bebida.getCusto(), 9.5);
});