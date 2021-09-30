const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./alexa/');
const fs = require('fs');

async function Alexa () {
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2, 2119, 6]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('WhatsAlexa')}
${chalk.white.italic('Made By ')}${chalk.red.bold('TOXIC DEVIL Modifiying as public @MrChaby')}

${chalk.blue.italic('🔄 Loading QR CODE...')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SESSION="${st}"`);
        }

        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, It is an IMPORTANT CODE... ⚠'))
            
        console.log(
            chalk.blue.bold('Thank You For Using WhatsAlexa 💖'))

        process.exit(0);
    });

    await conn.connect();
}

Alexa()
