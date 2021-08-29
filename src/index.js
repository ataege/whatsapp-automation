import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Client } from 'whatsapp-web.js';
import { eventBinder } from './utils/eventBinder';
import path from 'path';

const client = new Client();

eventBinder(path.resolve(__dirname, 'events'), client);

client.initialize().then(() => {
	console.log('Giriş yapıldı!');
});
