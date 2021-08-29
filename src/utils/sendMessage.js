import contactsData from '../contacts.json';
import { checkDate } from '../utils/dateChecker';

export function sendMessageAtDate(client, contact) {
	const contactData = contactsData.find((val) => val.number == contact.id.user);
	setInterval(() => {
		if (checkDate(contactData.sendAt)) {
			contact.getChat().then((chat) => {
				client.sendMessage(chat.id._serialized, contactData.content);
				console.log(
					`${contactData.content} sent to ${chat.name} (${chat.id.user})`
				);
			});
		} else return;
	}, 1000);
}
