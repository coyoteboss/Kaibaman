const Discord = require('discord.js');
const bot = new Discord.Client();

var isReady = true;

bot.on('ready', () => {
    console.log('I ready I ready!');
});

bot.on('message' , message => {
    var VC = message.member.voiceChannel;
    
    if(message.content === '!join' && isReady) {
        isReady = false;
        VC = message.member.voiceChannel;
        VC.join().then(connection => {
           
        });

    }
    
    if(message.content === '!leave' && isReady === false) {
       VC = message.member.voiceChannel;
       VC.leave();
       isReady = true;
    }
       

    if(message.content.toLowerCase() === '!kaibaman' && isReady) {
        isReady === false;
        var rand = Math.floor(Math.random() * 8);

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
        else if(rand === 7) {
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[I Summon Forth Myself Kaibaman](https://drive.google.com/open?id=18Q-D7YjhWk8Vy4h1lYfu5RPTRbtoiyWy)"
            }});
        }
        isReady === true;
    }

    var voiceChannel;

    if(isReady && message.content.toLowerCase() === 'i summon exodia') {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'i summon exodia necross') {
        isReady === false;
//         message.reply("[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)");
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)"
            }});
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'i summon the legendary exodia incarnate') { 
        isReady === false;
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'e summon exodia master of the guard') { 
        isReady === false;
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'i summon exxod master of the guard') { 
        isReady === false;
        message.reply("Ah Exxod Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'i summon exodius the ultimate forbidden lord') { 
        isReady === false;     
        message.reply("Ah Exodius The Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === 'i summon explodia') { 
        isReady === false;
//         var voiceChannel = message.member.voiceChannel;
        message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
//         voiceChannel.join().then(connection => {
//             const dispatcher = connection.playFile('Users/mattalter/Downloads/Explodia.mp3');
//             voiceChannel.leave();
//         });
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === "my grandfather's deck has no pathetic cards") {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content.toLowerCase() === "draw your last pathetic card") {
        isReady === false;
        message.reply("My grandfather's deck has no pathetic cards");
        isReady === true;
    }
    
    else if(isReady && message.content.toLowerCase() === "guess who's back") {
        isReady === false;
        message.reply("https://youtu.be/JnczksTB4us?t=5");
        isReady === true;
    }
});

bot.login(process.env.BOT_TOKEN);
