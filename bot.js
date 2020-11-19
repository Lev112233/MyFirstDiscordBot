const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token, bot_age, words_array, bot_info} = require('./config.json');


client.once('ready', () => {
    console.log(prefix);
    console.log(token);
    console.log(bot_age);
    console.log(words_array[0]);
    console.log(words_array[1]);
    console.log(words_array[2]);
    console.log(bot_info.name);
    console.log(bot_info.version);
});
    client.login('Nzc0MTY4NTU0NzczMTUxNzQ0.X6T2pg.vrBXPFMSVQywiyhTS30xNDGmaeQ')

    client.on('message', message =>{
        if(message.content ===  `${prefix}help`){
            message.channel.send('`СПИСОК КОММАНД`');
            message.channel.send('`/armor`');
            message.channel.send('`/sword`');
            message.channel.send('`/fandom`');
            message.channel.send('`/scamm list`');
            message.channel.send('`/dung`');

        }
        if(message.content ===  `${prefix}armor`){
            message.channel.send('https://hypixel-skyblock.fandom.com/wiki/Armor');
        }
        if(message.content ===` ${prefix}sword`){
            message.channel.send('https://hypixel-skyblock.fandom.com/wiki/Weapons')
        }
        if(message.content === `${prefix}fandom`){
            message.channel.send('hypixel-skyblock.fandom.com');
        }
        if(message.content === `${prefix}/scamm list`){
            message.channel.send('ДАТАБАЗ НЕТ');
        }
        if(message.content ===  `${prefix}/dung`){
            message.channel.send('https://hypixel-skyblock.fandom.com/wiki/Catacombs');
        }
        if(message.content ===  `${prefix}/invite`){
            message.channel.send('https://discord.com/oauth2/authorize?client_id=774168554773151744&scope=bot&permissions=2146958847');
        }
    });
