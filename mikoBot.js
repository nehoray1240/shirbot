const discord = require("discord.js");
const YTDL = require('ytdl-core');
const TOKEN = ("NDg2NTgwNDYyMjkxMTI0MjMz.DoQkyQ.vuAaum8xElvJPQa15apkgdCc06M");
const prefix = "-";

function play (connection , message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end" , function(){
        if(server.queue[0]) play(connection , message);
        else connection.disconnect();
    });
}

var bot = new discord.Client();
var servers = {};

bot.on("ready", function () {
    bot.user.setActivity("Swiper and the Butterfly!", { type: "PLAYING" })
    console.log('Miko is online!');
});
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '-';
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let arguments = messageArray.slice(1);

   
    

     //----------------------------------------Hebrew Commands-----------------------------------------------//
    //----------------------------------------Extraordinary Commands----------------------------------------//
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
    if (command === `לבבות`) {
        message.reply(' :heart: :sparkling_heart: :yellow_heart: :blue_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :sparkling_heart: :sparkling_heart: :yellow_heart: :sparkling_heart: :heart: :sparkling_heart: :heart: :sparkling_heart: :yellow_heart: :cupid: :purple_heart: :cupid: :purple_heart: :heartpulse: :broken_heart: :broken_heart: :broken_heart: :broken_heart: :broken_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :yellow_heart: :sparkling_heart: :heart_eyes: :heart_eyes: :heart_eyes: :heart_eyes: :yellow_heart: :green_heart: :yellow_heart: :blue_heart: :purple_heart: :cupid: :purple_heart: :broken_heart: :yellow_heart: :sparkling_heart: :yellow_heart: :sparkling_heart: :sparkling_heart: :yellow_heart: :blue_heart: :yellow_heart: :blue_heart: :purple_heart: :cupid: :broken_heart: :heart: :broken_heart: :broken_heart: :heart: :broken_heart: :heart: :broken_heart: :yellow_heart: :blue_heart: :yellow_heart: :cupid: :purple_heart: ')
    }
    if (command === `LIES`) {
        message.channel.send(`ITS NOT LIESSS i love you and i wanna snuggle up with you now!!!! T^T <33`);
    }

        });

    
bot.on("message", function (message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    var arguments = message.content.substring(prefix.length).split(" ");
    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let arguments1 = messageArray.slice(1);

   
    //----------------------------------------Normal Commands----------------------------------------//

    switch (arguments[0].toLowerCase()) {

        case "help":
        message.reply(`the prefix is '${prefix}' And the current commands are:\n -hello \n -help \n -miss \n -lam \n -ping \n -cute \n -youarecute \n -ily \n -ilym \n -ilyem \n -sad \n -die \n -both \n -ty \n -bea \n -s \n -gn \n -gm \n -sry \n -miko \n -nh \n -amazing \n ------AND THE BEST COMMANDS------ \n לבבות \n LIES \n אחיקור \n אני-אוהבת \n מיקו-תביאי-לי-לב \n נהוראי-חמוד \n מיקו-חמודה \n מחמאות \n מחמאות-מיקו \n ------MIKO SPECIAL COMMANDS------ \n -adorable \n -wth \n -lm \n -lmiko \n -scare \n -nc \n ------MISTAKE SPECIAL COMMANDS------ \n -heart \n -ith \n -omg \n -now \n -30 \n ------ROMANTICS PHOTOS------ \n -photo \n -cutie \n ------MUSIC COMMANDS------ \n -play (Link is Needed) \n -skip \n -stop`);
        break;

        case "s":
            message.reply(`surpriseeee!!!!`);
            break;

        case "hello":
            return message.reply("Hello! whats your name? my name is Nehoray!");
            break;

        case "ping":
        message.reply(`pong`);
            break;

        case "now":
        message.channel.send(`i wanna snuggle up with you now!!!! T^T <33`);
            break;

        case "photo":
        message.channel.send("LOOK! its so cute <3", { files: ["./images/killua.png"] });
        message.channel.send("miko it's you and Nehoray there?", { files: ["./images/nehoray.jpg"] });
        message.channel.send("miko it's you and Nehoray there too?", { files: ["./images/Killua_and_Alluka1.png"] });
        message.channel.send("ANOTHER PHOTO????", { files: ["./images/Killua_and_alluka.jpg"] });
            break;

            case "cutie":
        message.channel.send("Look At Her...<3", { files: ["./images/Cutie.jpg"] });
            break;

        case "cute":
        message.channel.sendMessage(`You are so cute!`);
        message.author.sendMessage(`You are so cute!`)
            break;

        case "youarecute":
        message.channel.sendMessage(arguments1 + `, You are so cute!`);
            break;
            
        case "ily":
        message.channel.sendMessage(arguments1 + `, i love you...<3`);
            break;

        case "ilym":
        message.channel.sendMessage(`i love you more...<3`);
            break;

        case "ilyem":
        message.channel.sendMessage(`i love you even more...<3`);
            break;

        case "heart":
        message.channel.sendMessage(`ugh.... she conquered my fortress and my heart.....<3`);
            break;

        case "sad":
        message.channel.sendMessage(arguments1 + ', dont be sad!');
            break;

        case "die":
        message.channel.sendMessage('im dying mikooo!');
            break;

        case "gn":
        message.channel.sendMessage('good night mikooo!!');
            break;

        case "gm":
        message.channel.sendMessage('Zzz... Good Morning Mi$take and miko! :) <3');
            break;

        case "both":
        message.channel.sendMessage('miko and MiStake , i love you both!');
            break;

        case "ty":
        message.channel.sendMessage('Thank you!');
            break;

        case "nh":
        message.channel.sendMessage('MIKO IS NOT HOPELESSSS!!! but she is cute :) <3');
            break;

        case "amazing":
        message.channel.sendMessage(arguments1 + `, You are so amazing!`);
            break;

        case "adorable":
        message.channel.sendMessage(`Nehoray YOU'RE SO ADORABLE! ily <3`);
            break;

        case "wth":
        message.channel.sendMessage('wth... you are so cute...<3');
            break;

        case "miko":
        message.channel.sendMessage('I want the real CUTEE miko NOWWW:) <3');
            break;

        case "lam":
        message.channel.sendMessage('LOOK AT MEEEEEE:) <3');        
            break;

        case "30":
        message.channel.sendMessage('Happy 1 Month Baby...///^///:)<3');        
            break;
    

        case "sry":
        message.channel.sendMessage('im sorry miko :(');
            break;

        case "miss":
        message.channel.sendMessage('i miss you miko :(');
            break;

        case "lm":
        message.channel.sendMessage('OMG , MiStake love me!');
        break;

        case "lmiko":
        message.channel.sendMessage('OMG , MiStake love miko! there is love in the air...<3');        
        break;

        case "ith":
        message.channel.sendMessage('i think miko love me... am I right?.... maybe...');        
        break;

        case "omg":
        message.channel.sendMessage('yesssssss i did ittttttt!!!!!!');        
        break;

        case "scare":
        message.channel.sendMessage('גררררר');        
        break;

        case "nc":
        message.channel.sendMessage('Nehoray YOU ARE SO CUTE');        
        break;

        case "bea":
        message.channel.sendMessage('Shir you are FUCKING BEAUTIFUL!!');        
        break;

        case "whoismiko?":
        var embed = new discord.RichEmbed()
            .addField("Who Am I?", "Hello My name is Princess Miko!" , true)
            .addField("Who Created me?", "Nehoray/Mi$take!" , true)
            .addField("Who am I in love with?", "Shir/mikomiko<3!" , true)
            .setColor(0x0edff)
            .setFooter("I love Shir<3")
            .setThumbnail('https://cdn.discordapp.com/attachments/492034217862234124/494840793480036352/killua.png')
            message.channel.sendEmbed(embed);
        break;

     //----------------------------------------Music Commands-----------------------------------------------//

        case "play":
        if(!arguments[1]){
            message.channel.sendMessage('T^T... Give Me A Link!!');
            return;
        }
        if(!message.member.voiceChannel){
            message.channel.sendMessage('T^T... Enter To The Voice Channel!!');
            return;
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };
        var server = servers[message.guild.id];

        server.queue.push(arguments[1]);

        if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
            play(connection , message);
        });
        break;

        case "skip":
        var server = servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
        break;

        case "stop":
        var server = servers[message.guild.id]; 
        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;

        default:
        message.channel.send('oh...Command Not Found...T^T..')    

    }








});


bot.login(TOKEN);
