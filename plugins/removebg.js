const Alexa = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');

const pipeline = promisify(stream.pipeline);

const Language = require('../language');
const Lang = Language.getString('removebg');

Alexa.addCommand({pattern: 'removebg ?(.*)', fromMe: false, desc: Lang.REMOVEBG_DESC}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO,MessageType.text);
    if (Config.RBG_API === false) return await message.client.sendMessage(message.jid,Lang.NO_API_KEY,MessageType.text);
    
    var load = await message.reply(Lang.RBGING);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
	

	
	
	Alexa.addCommand({pattern: 'removebg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid,Lang.NEED_PHOTO,MessageType.text);
    if (Config.RBG_API === false) return await message.client.sendMessage(message.jid,Lang.NO_API_KEY,MessageType.text);
    
    var load = await message.reply(Lang.RBGING);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    var form = new FormData();
    form.append('image_file', fs.createReadStream(location));
    form.append('size', 'auto');

    var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
        body: form,
        headers: {
            'X-Api-Key': Config.RBG_API
        }
    }); 
    
    await pipeline(
		rbg,
		fs.createWriteStream('rbg.png')
    );
    await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.image, {filename: 'Alexa-background-removed.png', mimetype: Mimetype.png});
    await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'Alexa-background-removed.png', mimetype: Mimetype.png});
    await load.delete();
}));
	
	
	

    var form = new FormData();
    form.append('image_file', fs.createReadStream(location));
    form.append('size', 'auto');

    var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
        body: form,
        headers: {
            'X-Api-Key': Config.RBG_API
        }
    }); 
    
    await pipeline(
		rbg,
		fs.createWriteStream('rbg.png')
    );
    await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.image, {filename: 'Alexa-background-removed.png', mimetype: Mimetype.png});
    await message.client.sendMessage(message.jid,fs.readFileSync('rbg.png'), MessageType.document, {filename: 'Alexa-background-removed.png', mimetype: Mimetype.png});
    await load.delete();
}));
