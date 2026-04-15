import test from "node:test";
import assert from "node:assert/strict";
import { TV, Projetor } from "./Subsistemas";
import { Receiver, PlayerMidia, LuzAmbiente, SistemaSom } from "./Subsistemas";
import { HomeTheaterFacade } from "./Facade";
test("Facade deve executar assistirFilme sem erro", () => {
  const tv = new TV();
  const projetor = new Projetor();
  const receiver = new Receiver();
  const player = new PlayerMidia();
  const luz = new LuzAmbiente();
  const som = new SistemaSom();

  const facade = new HomeTheaterFacade(
    tv,
    projetor,
    receiver,
    player,
    luz,
    som
  );

  // teste simples: não deve lançar erro
  assert.doesNotThrow(() => {
    facade.assistirFilme("Matrix");
  });
});