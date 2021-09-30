let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let TinyURL = require('tinyurl');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('web');
let SLang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'ping', fromMe: true, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
       var start = new Date().getTime();
       var msg = await message.reply('```Ping!```');
       var end = new Date().getTime();

       await msg.delete();
       await message.client.sendMessage(
         message.jid,'*Ping -* ```' + (end - start) + 'ms```\n\n', MessageType.text);
    }));

    WhatsAlexa.addCommand({pattern: 'short ?(.*)', fromMe: true, desc: Lang.URL}, (async (message, match) => {

         if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

         TinyURL.shorten(`${match[1]}`, async(res, err) => {
           if (err)
             await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

             await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
         });
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    WhatsAlexa.addCommand({pattern: 'ping', fromMe: false, deleteCommand: false, desc: Lang.PING_DESC}, (async (message, match) => {
       var start = new Date().getTime();
       var msg = await message.reply('```Ping!```');
       var end = new Date().getTime();

       await msg.delete();
       await message.client.sendMessage(
         message.jid,'*Ping -* ```' + (end - start) + 'ms```\n\n', MessageType.text);
    }));

    WhatsAlexa.addCommand({pattern: 'short ?(.*)', fromMe: false, desc: Lang.URL}, (async (message, match) => {

         if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text);

         TinyURL.shorten(`${match[1]}`, async(res, err) => {
           if (err)
             await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text);

             await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text)
         });
    }));
}
