let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

WhatsAlexa.addCommand({pattern: 'clear', fromMe: true, desc: Lang.CLR_DESC}, (async (message, match) => {

    await message.sendMessage(Lang.CLR_PROC);

    await message.client.modifyChat(message.jid, ChatModification.delete);

    await message.sendMessage(Lang.CLR_DONE);

}));
