// Official plugin by https://github.com/MrChaby

const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true


WhatsAlexa.addCommand({pattern: 'btn', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
        {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
       ]
       
       const sections = [{title: "Section 1", rows: rows}]
       
       const button = {
        buttonText: 'Click Me!',
        description: "Hello it's list message",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));

WhatsAlexa.addCommand({pattern: 'btm', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
      ]
      
      const buttonMessage = {
          contentText: "Hi it's button message",
          footerText: 'Hello World',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
