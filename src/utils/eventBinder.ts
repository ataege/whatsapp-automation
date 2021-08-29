import fs from 'fs';
import path from 'path';
import { Client } from 'whatsapp-web.js';

export function eventBinder(eventsPath: string, client: Client) {
	fs.readdir(eventsPath, {}, (err, files) => {
		files.forEach(async (file) => {
			const fileDir = path.join(eventsPath, file.toString());
			if (fs.lstatSync(fileDir).isDirectory()) {
				eventBinder(fileDir, client);
			} else {
				const event = require(path.resolve(
					path.join(eventsPath, file as string)
				));
				client.on(event.eventName, await event.handler.bind(null, client));
			}
		});
	});
}
