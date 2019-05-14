const Discord = require('discord.js');
const bot = new Discord.Client();

var isReady = true;

bot.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message' , message => {

    message.content === message.content.toLocaleUpperCase;

    if(message.content === '!KAIBAMAN' && isReady) {
        isReady === false;
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
        isReady === true;
    }

    var voiceChannel;

    if(isReady && message.content === 'I SUMMON EXODIA') {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON EXODIA NECROSS') {
        isReady === false;
        message.reply("Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON THE LEGENDARY EXODIA INCARNATE') { 
        isReady === false;
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON EXODIA MASTER OF THE GUARD') { 
        isReady === false;
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON EXXOD MASTER OF THE GUARD') { 
        isReady === false;
        message.reply("Ah Exxod Master of the Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON EXODIUS THE ULTIMATE FORBIDDEN LORD') { 
        isReady === false;
        message.reply("Ah Exodius the Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I SUMMON EXPLODIA') { 
        isReady === false;
        message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
        isReady === true;
    }

    else if(isReady && message.content === "MY GRANDFATHER'S DECK HAS NO PATHETIC CARDS") {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === "DRAW YOUR LAST PATHETIC CARD") {
        isReady === false;
        message.reply("My grandfather's deck has no pathetic cards");
        isReady === true;
    }
});

bot.login(process.env.BOT_TOKEN);
