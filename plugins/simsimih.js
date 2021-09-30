let WhatsAlexa = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let got = require('got');
let Config = require('../config');
let td = Config.WORKTYPE == 'public' ? false : true
let Language = require('../language');
let Lang = Language.getString('ai');

WhatsAlexa.addCommand({pattern: 'alexa ?(.*)', fromMe: td, desc: Lang.SIMI_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.INVALID_REQ);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=en&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*Alexa  ' + Lang.BOT_DIVIDER +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUND_RESPONSE, MessageType.text);
	}
});
