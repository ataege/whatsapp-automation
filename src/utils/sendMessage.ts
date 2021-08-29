import { Client, Contact } from 'whatsapp-web.js';
import contactsData from '../../contacts.json';
import { checkDate } from './dateChecker';

export function sendMessageAtDate(client: Client, contact: Contact) {
	const contactData = contactsData.find(
		(val: Record<string, string>) => val.number == contact.id.user
	);

	if (!contactData) throw new Error("Can't find contacts.json file.");

	setInterval(() => {
		if (checkDate(contactData.sendAt)) {
			contact.getChat().then((chat) => {
				client.sendMessage(chat.id._serialized, contactData.content);
				console.log(
					`"${contactData.content}" sent to ${chat.name} (${chat.id.user})`
				);
			});
		} else return;
	}, 1000);
}
