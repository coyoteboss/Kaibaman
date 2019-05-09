const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , message => {
    if(message.content === '!Kaibaman') {
         var rand = Math.floor(Math.random() * 7;

        if(rand === 0) {
            message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        }
        else if(rand === 1) {
            message.reply("Ah Exodia Necross it's not possible. Nobody's every been able to summon him!");
        }

        else if(rand === 2) {
            message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
        }

        else if(rand === 3) {
            message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        }

        else if(rand === 4) {
            message.reply("Ah Exxod Master of the Guard it's not possible. Nobody's ever been able to summon him!");
        }

        else if(rand === 5) {
            message.reply("Ah Exodius the Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
        }

        else if(rand === 6) {
            message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
        }
    }

    if(message.content === 'I Summon Exodia') {
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon Exodia Necross') {
        message.reply("Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon The Legendary Exodia Incarnate') {
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon Exodia Master of The Guard') {
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon Exxod Master of the Guard') {
        message.reply("Ah Exxod Master of the Guard it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon Exodius the Ultimate Forbidden Lord') {
        message.reply("Ah Exodius the Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I Summon Explodia') {
        message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
    }
});

bot.login(process.env.NTc1MTc0NDIyMjIzMTI2NTM4.XNEQRg.e5JbRG93spU22ASCqv7nx4iyu6o);
