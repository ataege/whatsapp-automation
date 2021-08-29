import qrcode from 'qrcode-terminal';

export function handler(client, qr) {
	qrcode.generate(qr, { small: true });
}

export const eventName = 'qr';
