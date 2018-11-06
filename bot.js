const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();

client.on('ready', () => {
    console.log('This All Accounts Ready');
        client.user.setStatus("dnd");

});

client2.on('ready', () => {
        client2.user.setStatus("dnd");

});

client3.on('ready', () => {
        client3.user.setStatus("dnd");

});

client4.on('ready', () => {
        client4.user.setStatus("dnd");

});

client5.on('ready', () => {
        client5.user.setStatus("dnd");

});

client6.on('ready', () => {
        client6.user.setStatus("dnd");

});

client7.on('ready', () => {
        client7.user.setStatus("idle");

});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.rbbn);
client2.login(process.env.rbbn2);
client3.login(process.env.rbbn3);
client4.login(process.env.rbbn4);
client5.login(process.env.rbbn5);
client6.login(process.env.rbbn6);
client7.login(process.env.rbbn7);
client8.login(process.env.rbbn8);
client9.login(process.env.rbbn9);
client10.login(process.env.rbbn10);
