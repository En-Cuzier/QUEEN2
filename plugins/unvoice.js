let WhatsAlexa = require('../events');
let {MessageType,Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'unvoice', fromMe: true, desc: Lang.UV_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.sendMessage(Lang.UV_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.UV_PROC,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .format('mp3')
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
    WhatsAlexa.addCommand({pattern: 'unaudio', fromMe: true, desc: Lang.UA_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UA_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.UA_PROC,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'unvoice', fromMe: false, desc: Lang.UV_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.sendMessage(Lang.UV_REPLY);
        var downloading = await message.client.sendMessage(message.jid,Lang.UV_PROC,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .format('mp3')
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
    WhatsAlexa.addCommand({pattern: 'unaudio', fromMe: true, desc: Lang.UA_DESC}, (async (message, match) => {    

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UA_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Lang.UA_PROC,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
