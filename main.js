const Discord = require('discord.js');
const bot = new Discord.Client();

var isReady = true;

bot.on('ready', () => {
    console.log('I ready I ready!');
});

bot.on('message' , message => {
    var VC = message.member.voiceChannel;
    var textmsg = message.content.toLowerCase();
    
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
       

    if(textmsg === '!kaibaman' && isReady) {
        isReady === false;
        var rand = Math.floor(Math.random() * 9);

        if(rand === 0) {
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1o8cEUXPC4mgcFlFONRP0SCgh7wvXcH8_)"
            }});
        }
        else if(rand === 1) {
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)"
            }});
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
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Explodia it's not possible. Nobody's ever been able to escape him!](https://drive.google.com/open?id=1aaOD9k1py80axmAPQjkD_hpFEyo5pPPM)"
            }});
        }
        else if(rand === 7) {
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[I Summon Forth Myself Kaibaman](https://drive.google.com/open?id=18Q-D7YjhWk8Vy4h1lYfu5RPTRbtoiyWy)"
            }});
        }
        else if(rand === 8) {
            message.channel.send({embed: {
//                 color: 3447003,
                description: "[The Amazing Kaibaman](https://drive.google.com/open?id=1fjTTi--4bFL9guHI-9fULv82btX5jeEF)"
            }});
        }
        
        isReady === true;
    }

    var voiceChannel;

    if(isReady && textmsg === 'i summon exodia') {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1o8cEUXPC4mgcFlFONRP0SCgh7wvXcH8_)"
            }});
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon exodia necross') {
        isReady = false;
//         message.reply("[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)");
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia Necross it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1VVVW675fZGnjSaDWjt_9xleiS6Ml3sdN)"
            }});
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon the legendary exodia incarnate') { 
        isReady = false;
        message.reply("Ah The Legendary Exodia Incarnate it's not possible. Nobody's ever been able to summon him!");
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon exodia master of the guard') { 
        isReady = false;
        message.reply("Ah Exodia Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon exxod master of the guard') { 
        isReady = false;
        message.reply("Ah Exxod Master of The Guard it's not possible. Nobody's ever been able to summon him!");
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon exodius the ultimate forbidden lord') { 
        isReady = false;     
        message.reply("Ah Exodius The Ultimate Forbidden Lord it's not possible. Nobody's ever been able to summon him!");
        isReady = true;
    }

    else if(isReady && textmsg === 'i summon explodia') { 
        isReady = false;
//         var voiceChannel = message.member.voiceChannel;
//                message.reply("Ah Explodia it's not possible. Nobody's ever been able to escape him!");
//         voiceChannel.join().then(connection => {
//             const dispatcher = connection.playFile('Users/mattalter/Downloads/Explodia.mp3');
//             voiceChannel.leave();
//         });
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Explodia it's not possible. Nobody's ever been able to escape him!](https://drive.google.com/open?id=1aaOD9k1py80axmAPQjkD_hpFEyo5pPPM)"
            }});
        isReady = true;
    }

    else if(isReady && textmsg === "my grandpa's deck has no pathetic cards") {
        isReady = false;
//         message.reply("Ah Exodia it's not possible. Nobody's ever been able to summon him!");
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Ah Exodia it's not possible. Nobody's ever been able to summon him!](https://drive.google.com/open?id=1o8cEUXPC4mgcFlFONRP0SCgh7wvXcH8_)"
            }});
        isReady = true;
    }

    else if(isReady && textmsg === "draw your last pathetic card") {
        isReady === false;
        message.reply("My grandfather's deck has no pathetic cards");
        isReady === true;
    }
    
    else if(isReady && textmsg === "guess who's back") {
        isReady = false;
        message.reply("https://youtu.be/JnczksTB4us?t=5");
        isReady = true;
    }
    
    else if(isReady && textmsg.endsWith("pot of greed")) {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[I activate the magic card pot of greed!](https://drive.google.com/open?id=1ItbsBgZV-1thII-H_t2Ff5q33hy8Y9Oi)"
            }});
        isReady = true;
    }
    
    else if(isReady && textmsg.endsWith("what does pot of greed do")) {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Pot Of Greed You Say!](https://drive.google.com/open?id=1AlLWwGNkoKTj_MSMumCfM_G2VjUlGItX)"
            }});
        isReady = true;
    }
    
    else if(isReady && textmsg === "!kiabaman") {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[My Name's Not Kiaba!](https://drive.google.com/open?id=1z2r8LrsTWoXlNqk1vshRfnVKwn9t0FWl)"
            }});
        isReady = true;
    }
    
    else if(isReady && textmsg === "screw the rules") {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Looks like the rules just got screwed!](https://drive.google.com/open?id=11zPExQAx9fJRf-MScHadGuzxWpP3jkUV)"
            }});
        isReady = true;
    }
    
    else if(isReady && textmsg.endsWith("ghost of a chance")) {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Looks like you don't stand a ghost of a chance!](https://drive.google.com/open?id=1Dc8dVzygcAQydDkEsYIqXPReL4JWDEKM)"
            }});
        isReady = true;
    }
    
    else if(isReady && textmsg.includes("meme")  && textmsg.includes("old")) {
        isReady = false;
        message.channel.send({embed: {
//                 color: 3447003,
                description: "[Looks like this meme is really old!](https://drive.google.com/open?id=1uX8Vx_sYKh_yYf5IaF4ZL9ZbRePVk4DY)"
            }});
        isReady = true;
    }

});

bot.login(process.env.BOT_TOKEN);
