import { Client } from 'whatsapp-web.js';
import contactsData from '../../contacts.json';
import { sendMessageAtDate } from '../utils/sendMessage';

export function handler(client: Client) {
	client.getContacts().then((contacts) => {
		const data = contacts.filter((c) =>
			contactsData.some((val) => val.number == c.id.user)
		);
		data.forEach((contact) => sendMessageAtDate(client, contact));
	});
}

export const eventName = 'ready';
