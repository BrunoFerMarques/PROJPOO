import { TV, Projetor, PlayerMidia, Receiver, LuzAmbiente, SistemaSom } from "./Subsistemas";

export class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private projetor: Projetor,
    private receiver: Receiver,
    private player: PlayerMidia,
    private luz: LuzAmbiente,
    private som: SistemaSom
  ) {}

  assistirFilme(filme: string): void {
    console.log("\nPreparando para assistir filme...");

    this.luz.diminuir();
    this.tv.ligar();
    this.projetor.ligar();

    this.receiver.ligar();
    this.receiver.configurarSom();

    this.som.ligar();

    this.player.ligar();
    this.player.reproduzir(filme);
  }

  ouvirMusica(musica: string): void {
    console.log("\nPreparando para ouvir música...");

    this.luz.acender();

    this.receiver.ligar();
    this.som.ligar();

    this.player.ligar();
    this.player.reproduzir(musica);
  }

  desligarTudo(): void {
    console.log("\nDesligando sistema...");

    this.player.parar();
    this.player.desligar();

    this.som.desligar();
    this.receiver.desligar();
    this.projetor.desligar();
    this.tv.desligar();

    this.luz.acender();
  }
}