import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

export function handler(client: Client, qr: string) {
	qrcode.generate(qr, { small: true });
}

export const eventName = 'qr';
