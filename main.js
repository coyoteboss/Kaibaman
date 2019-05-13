const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message' , message => {
    if(message.content === '!Kaibaman') {
         var rand = Math.floor(Math.random() * 7);

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

     message === message.content.toLocaleUpperCase

    if(message.content === 'I SUMMON EXODIA') {
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON EXODIA NECROSS') {
        message.reply("Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON THE LEGENDARY EXODIA INCARNATE') { 
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON EXODIA MASTER OF THE GUARD') { 
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON EXXOD MASTER OF THE GUARD') { 
        message.reply("Ah Exxod Master of the Guard it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON EXODIUS THE ULTIMATE FORBIDDEN LORD') { 
        message.reply("Ah Exodius the Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === 'I SUMMON EXPLODIA') { 
        message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
    }

    else if(message.content === "MY GRANDFATHER'S DECK HAS NO PATHETIC CARDS") {
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
    }

    else if(message.content === "DRAW YOUR LAST PATHETIC CARD") {
        message.reply("My grandfather's deck has no pathetic cards");
    }
});

bot.login(process.env.BOT_TOKEN);
