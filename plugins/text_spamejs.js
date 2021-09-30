let WhatsAlexa = require('../events');
let {MessageType, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Heroku = require('heroku-client');

let STOP_SPAMDESC = 'Stops spam command.'
let STOP_SPAM = '*Spam successfully stopped! Please wait a moment.* ✅ '
let SPAM_DESC = 'It spam until you stop it.\n⌨️ Ex: .spam test'
let NEED_WORD = '*Need Some Words!*'

let Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

let code = ('THIS \nIS \nAN \nANTISAPM \nanti lag,\nThis \ncode \nprevents \nyour \nphone \nfrom \ngetting \nstuck \ndue \nto \nmalicious \nmessages\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+Config.CK+'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+Config.CK+'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+Config.CK+'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+Config.CK+'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'+Config.CK+'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n '+Config.CK+'\n\n')
let FINAL = 'THIS IS AN ANTISAPM (anti lag),\nThis code prevents your phone from getting stuck due to malicious messages'
let TMUTE = 'Trying to close temporary,\nAttempting to temporarily close the group'
let MUT = '.mute'
let SCXR = 'Running script....'

let heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


WhatsAlexa.addCommand({pattern: 'killspam', fromMe: true, dontAddCommandList: true, desc: STOP_SPAMDESC}, (async (message, match) => {

    await message.client.sendMessage(message.jid, STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));

WhatsAlexa.addCommand({pattern: 'antispam', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('Preforming....');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    await message.client.sendMessage(
        message.jid,code, MessageType.text);

        await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                               await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);


}));

WhatsAlexa.addCommand({pattern: 'spam ?(.*)', fromMe: true, dontAddCommandList: true, desc: SPAM_DESC}, (async (message, match) => {


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, NEED_WORD);

    }

    var spam = `${match[1]}`
    var fin = spam.replace(/#/g, "\n");

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, Config.CK, MessageType.text);
}));
