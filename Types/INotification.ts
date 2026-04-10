export interface INotification {
  enviar(mensagem: string, account: string): void;
}