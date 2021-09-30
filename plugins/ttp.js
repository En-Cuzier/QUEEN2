let WhatsAlexa = require('../events');
let { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('ttp');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CK, quoted: message.data})

    }));

    WhatsAlexa.addCommand({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data})

    }));
    
    WhatsAlexa.addCommand({pattern: 'emoji ?(.*)', fromMe: true, desc: Lang.EMOJI_DESC}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CK, quoted: message.data})
  
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CK, quoted: message.data})

    }));

    WhatsAlexa.addCommand({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
        var uri = encodeURI(match[1]);

        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data})

    }));
    
    WhatsAlexa.addCommand({pattern: 'emoji ?(.*)', fromMe: false, desc: Lang.EMOJI_DESC}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        
      var uri = encodeURI(match[1]);
  
      var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=odsMYXx67ZhT38w5hp5mgRKO8En&emoji='+ uri, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CK, quoted: message.data})
  
    }));
}
