export class ExternalSmsAPI {
  sendMessage(phoneNumber: string, text: string): void {
    console.log(`API EXTERNA SMS → ${phoneNumber}: ${text}`);
  }
}