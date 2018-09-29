const prefixjson = require('./prefix.json');
const token = require('./token.json');
const discord = require('discord.js');
const YTDL = require('ytdl-core');
const bot = new discord.Client({ disableEveryone: true });
const owner = '336527823571517443';


bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Swiper and the Butterfly!", { type: "PLAYING" })

});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = prefixjson.prefix;
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let arguments = messageArray.slice(1);
    var servers = {};
    function play(connection, message) {
        var server = [servers.guild.id];

        server.dispatcher = connection.playStream(YTDL(server.queue[0], { filter: "audioonly" }));
        server.dispatcher.shift();
        server.dispatcher.on("end", function () {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });

    }

    if (command === `${prefix}play`) {
        if (!arguments) {
            message.channel.sendMessage('Give me a song to play miko/MiStake!!');
            return;
        }
        if (!message.member.voiceChannel) {
            message.channel.sendMessage('Enter the Voice channel Cute Girl/Boy!!');
            return;
        }
        if (!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }
        var server = servers[message.guild.id];

        server.queue.push(arguments);

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function (connection) {
            play(connection, message);
        });
    }
    if (command === `${prefix}skip`) {
        var server = servers[message.guild.id]
        if (server.dispatcher) server.dispatcher.end();
    }

    if (command === `${prefix}leave`) {
        var server = servers[message.guild.id]
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }

    if (command === `${prefix}help`) {
        message.reply(`the prefix is '${prefix}' And the current commands are:\n -hello \n -help \n -miss \n -lam \n -ping \n -cute \n -youarecute \n -ily \n -ilym \n -ilyem \n -sad \n -die \n -both \n -ty \n -bea \n -s \n -gn \n -gm \n -sry \n -miko \n -nh \n -amazing \n -say \n ------AND THE BEST COMMANDS------ \n לבבות \n LIES \n אחיקור \n אני-אוהבת \n מיקו-תביאי-לי-לב \n נהוראי-חמוד \n מיקו-חמודה \n ------MIKO SPECIAL COMMANDS------ \n -adorable \n -wth \n -lm \n -lmiko \n -scare \n -nc \n ------MISTAKE SPECIAL COMMANDS------ \n -heart \n -ith \n -omg \n ------ROMANTICS PHOTOS------ \n -photo`);
    }
    if (command === `${prefix}s`) {
        message.reply(`surpriseeee!!!!`);
    }

    if (command === `${prefix}hello`) {
        return message.reply("Hello! whats your name? my name is Nehoray!");
    }

    if (command === `${prefix}ping`) {
        message.reply(`pong`);
    }
    if (command === `${prefix}game`) {
    bot.user.setActivity(arguments + '!', { type: "PLAYING" })

    }
    if (command === `${prefix}now`) {
        message.channel.send(`i wanna snuggle up with you now!!!! T^T <33`);
    }
    if (command === `LIES`) {
        message.channel.send(`ITS NOT LIESSS i love you and i wanna snuggle up with you now!!!! T^T <33`);
    }
    if (command === `${prefix}photo`) {
        message.channel.send("LOOK! its so cute <3", { files: ["./images/killua.png"] });
        message.channel.send("miko it's you and Nehoray there?", { files: ["./images/nehoray.jpg"] });
        message.channel.send("miko it's you and Nehoray there too?", { files: ["./images/Killua_and_Alluka1.png"] });
        message.channel.send("ANOTHER PHOTO????", { files: ["./images/Killua_and_alluka.jpg"] });

    }

    if (command === `${prefix}cute`) {
        message.channel.sendMessage(`You are so cute!`);
        message.author.sendMessage(`You are so cute!`)
    }

    if (command === `${prefix}youarecute`) {
        message.channel.sendMessage(arguments + `, You are so cute!`);
    }
    if (command === `${prefix}ily`) {
        message.channel.sendMessage(arguments + `, i love you...<3`);
    }
    if (command === `${prefix}ilym`) {
        message.channel.sendMessage(`i love you more...<3`);
    }
    if (command === `${prefix}heart`) {
        message.channel.sendMessage(`ugh.... she conquered my fortress and my heart.....<3`);
    }
    if (command === `${prefix}ilyem`) {
        message.channel.sendMessage(`i love you even more...<3`);
    }
    if (command === `${prefix}sad`) {
        message.channel.sendMessage(arguments + ', dont be sad!');
    }

    if (command === `${prefix}die`) {
        message.channel.sendMessage('im dying mikooo!');
    }
    if (command === `${prefix}gn`) {
        message.channel.sendMessage('good night mikooo!!');
    }

    if (command === `${prefix}both`) {
        message.channel.sendMessage('miko and MiStake , i love you both!');
    }

    if (command === `${prefix}ty`) {
        message.channel.sendMessage('Thank you!');
    }

    if (command === `${prefix}nh`) {
        message.channel.sendMessage('MIKO IS NOT HOPELESSSS!!! but she is cute :) <3');
    }

    if (command === `${prefix}amazing`) {
        message.channel.sendMessage(arguments + `, You are so amazing!`);
    }
    if (command === `${prefix}adorable`) {
        message.channel.sendMessage(`Nehoray YOU'RE SO ADORABLE! ily <3`);
    }
    if (command === `${prefix}say`) {
        message.channel.sendMessage(arguments + ' ');
    }

    if (command === `${prefix}wth`) {
        message.channel.sendMessage('wth... you are so cute...<3');
    }
    if (command === `${prefix}gm`) {
        message.channel.sendMessage('Zzz... Good Morning Mi$take and miko! :) <3');
    }
    if (command === `${prefix}miko`) {
        message.channel.sendMessage('I want the real CUTEE miko NOWWW:) <3');
    }
    if (command === `${prefix}lam`) {
        message.channel.sendMessage('LOOK AT MEEEEEE:) <3');
    }
    if (command === `${prefix}sry`) {
        message.channel.sendMessage('im sorry miko :(');
    }
    if (command === `${prefix}miss`) {
        message.channel.sendMessage('i miss you miko :(');
    }
    if (command === `אחיקור`) {
        message.channel.sendMessage('נהוראי אח יקור ומיקו אחות יקורההה ואני גםםם');
    }
    if (command === `מחמאות`) {
        var roll = Math.floor(Math.random() * 3) + 1;
        if (roll === 2) {
            message.channel.send('את כזאת מקסימה!!!');
        } if (roll === 1) {
            message.channel.send('את מושלמת ומתוקה ומקסימההה!!!');
        } if (roll === 3) {
            message.channel.send('אני אוהב אותך!!!!');

        }
    }
    if (command === `מחמאות-מיקו`) {
        var roll = Math.floor(Math.random() * 5) + 1;
        if (roll === 2) {
            message.channel.send('אתה פשוט חמודי כלכך!!!');
        } if (roll === 1) {
            message.channel.send('אתה מתוקי שלי!!!');
        } if (roll === 3) {
            message.channel.send('אני אוהבת אותך!!!!');
        }
        if (roll === 4) {
            message.channel.send('אתה מקסים....!!!!');
        }
        if (roll === 5) {
            message.channel.send('///^///...');

        }
    }
    if (command === `אני-אוהבת`) {
        message.channel.sendMessage('את מי? תמשיכי ... נ.ב מתכנתים הם העם החזק והחמוד');
    }
    if (command === `מיקו-תביאי-לי-לב`) {
        message.channel.sendMessage(':)♡♡♡♡');
    }

    if (command === `נהוראי-חמוד`) {
        message.channel.sendMessage('♡♡נהוראי זה אנייי אני החמוד הראשי פה♡♡');
    }
    if (command === `מיקו-חמודה`) {
        message.channel.sendMessage('♡♡מיקו זאת אנייי אני החמודה הראשית פה♡♡');
    }

    if (command === `${prefix}lm`) {
        message.channel.sendMessage('OMG , MiStake love me!');
    }
    if (command === `${prefix}lmiko`) {
        message.channel.sendMessage('OMG , MiStake love miko! there is love in the air...<3');
    }

    if (command === `${prefix}ith`) {
        message.channel.sendMessage('i think miko love me... am I right?.... maybe...');
    }

    if (command === `${prefix}omg`) {
        message.channel.sendMessage('yesssssss i did ittttttt!!!!!!');
    }

    if (command === `${prefix}scare`) {
        message.channel.sendMessage('גררררר');
    }

    if (command === `${prefix}nc`) {
        message.channel.sendMessage('Nehoray YOU ARE SO CUTE');
    }
    if (command === `${prefix}bea`) {
        message.channel.sendMessage('Shir you are FUCKING BEAUTIFUL!!');
    }

    if (command === `לבבות`) {
        message.reply(' :heart: :sparkling_heart: :yellow_heart: :blue_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :sparkling_heart: :sparkling_heart: :yellow_heart: :sparkling_heart: :heart: :sparkling_heart: :heart: :sparkling_heart: :yellow_heart: :cupid: :purple_heart: :cupid: :purple_heart: :heartpulse: :broken_heart: :broken_heart: :broken_heart: :broken_heart: :broken_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :sparkling_heart: :heart_eyes: :heart_eyes: :heart_eyes: :heart_eyes: :yellow_heart: :green_heart: :yellow_heart: :blue_heart: :purple_heart: :cupid: :purple_heart: :broken_heart: :yellow_heart: :sparkling_heart: :yellow_heart: :sparkling_heart: :sparkling_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :purple_heart: :cupid: :broken_heart: :heart: :broken_heart: :broken_heart: :heart: :broken_heart: :heart: :broken_heart: :yellow_heart: :blue_heart: :yellow_heart: :cupid: :purple_heart: ')
    }

});

bot.login(token.token);








