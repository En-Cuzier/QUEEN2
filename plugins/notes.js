let fs = require('fs/promises')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let WhatsAlexa = require('../events');
let NotesDB = require('./sql/notes');
let Language = require('../language')
let Lang = Language.getString('notes')

WhatsAlexa.addCommand({ pattern: 'notes', fromMe: true, desc: Lang.NOTES_USAGE }, async (message, match) => {


    const _notes = await NotesDB.getNotes()
    const notes = []
    _notes.map(note => {
        if (!note.note.includes('IMG;;;')) {
            notes.push('📝' + note.note)
        }
    })

    if (notes.length < 1) {
        return await message.sendMessage(Lang.NO_SAVED)
    }

    await message.sendMessage(Lang.SAVED)

    await message.sendMessage(notes.join('\n\n'))
    _notes.filter(note => note.note.includes('IMG;;;')).forEach(async (note) => {
        const imageName = note.note.replace('IMG;;;', '')
        const image = await fs.readFile(path.resolve('media', imageName))
        await message.sendMessage(image, MessageType.image)
    })


})



WhatsAlexa.addCommand({ pattern: 'save ?(.*)', fromMe: true, desc: Lang.SAVE_USAGE }, async (message, match) => {

    const userNote = match[1]

    if (!userNote && !message.reply_message) {
        await message.sendMessage(Lang.REPLY)

        return
    }

    if (userNote) {
        await NotesDB.saveNote(userNote)
        await message.sendMessage(Lang.SUCCESSFULLY_ADDED)

        return

    } else if (!userNote && message.reply_message) {
        if (!message.reply_message.video) {

            if (message.reply_message.image) {
                const savedFileName = await message.client.downloadAndSaveMediaMessage({
                    key: {
                        remoteJid: message.reply_message.jid,
                        id: message.reply_message.id
                    },
                    message: message.reply_message.data.quotedMessage
                })

                const randomFileName = savedFileName.split('.')[0] + Math.floor(Math.random() * 50) + path.extname(savedFileName)
                await fs.copyFile(savedFileName, path.resolve('media', randomFileName))
                await NotesDB.saveNote("IMG;;;" + randomFileName)
                await message.sendMessage(Lang.SUCCESSFULLY_ADDED)


            }

            await NotesDB.saveNote(message.reply_message.text)
            await message.sendMessage(Lang.SUCCESSFULLY_ADDED)

            return
        }
    } else {
        await message.sendMessage(Lang.UNSUCCESSFUL)

        return
    }
})

WhatsAlexa.addCommand({ pattern: 'deleteNotes', fromMe: true, desc: Lang.DELETE_USAGE }, async (message, match) => {

    await NotesDB.deleteAllNotes()

    const mediaFolder = await fs.readdir(path.resolve('media'))

    mediaFolder.forEach(async (file) => {
        await fs.unlink(path.resolve('media', file))
    })

    return await message.sendMessage(Lang.SUCCESSFULLY_DELETED)
})

