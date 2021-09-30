let WhatsAlexa = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let Config = require('../config');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Language = require('../language');
let Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'private') {
    
    WhatsAlexa.addCommand({pattern: 'qr ?(.*)', fromMe: true, desc: Lang.QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Made By WhatsAlexa"})
        
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    WhatsAlexa.addCommand({pattern: 'qr ?(.*)', fromMe: false, desc: Lang.QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Made By WhatsAlexa"})
        
    }));
}
