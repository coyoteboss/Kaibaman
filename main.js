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
       

    if(message.content === '!Kaibaman' && isReady) {
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

    if(isReady && message.content === 'I Summon Exodia') {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon Exodia Necross') {
        isReady === false;
//         message.reply("[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)");
        message.channel.send({embed: {
                color: 3447003,
                description: "[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)"
            }});
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon The Legendary Exodia Incarnate') { 
        isReady === false;
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon Exodia Master of The Guard') { 
        isReady === false;
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon Exxod Master of The Guard') { 
        isReady === false;
        message.reply("Ah Exxod Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon Exodius The Ultimate Forbidden Lord') { 
        isReady === false;     
        message.reply("Ah Exodius The Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === 'I Summon Explodia') { 
        isReady === false;
        var voiceChannel = message.member.voiceChannel;
        message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
        voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('Users/mattalter/Downloads/Explodia.mp3');
            voiceChannel.leave();
        });
        isReady === true;
    }

    else if(isReady && message.content === "My Grandfather's Deck Has No Pathetic Cards") {
        isReady === false;
        message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        isReady === true;
    }

    else if(isReady && message.content === "Draw Your Last Pathetic Card") {
        isReady === false;
        message.reply("My grandfather's deck has no pathetic cards");
        isReady === true;
    }
    
    else if(isReady && message.content === "Guess Who's Back") {
        isReady === false;
        message.reply("https://youtu.be/JnczksTB4us?t=5");
        isReady === true;
    }
});

bot.login(process.env.BOT_TOKEN);
