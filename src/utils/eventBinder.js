import fs from 'fs';
import path from 'path';

export function eventBinder(eventsPath, client) {
	fs.readdir(eventsPath, {}, (err, files) => {
		files.forEach(async (file) => {
			const fileDir = path.join(eventsPath, file.toString());
			if (fs.lstatSync(fileDir).isDirectory()) {
				eventBinder(fileDir);
			} else {
				const event = require(path.resolve(path.join(eventsPath, file)));
				client.on(event.eventName, await event.handler.bind(null, client));
			}
		});
	});
}
