require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder} = require('discord.js');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
}) 
client.on('ready', (c) =>{
    console.log(`👍${c.user.tag} is online`);
});

client.on('messageCreate', (message) => {
  if (message.content === 'START XBOX ONE CARDROP'){
    if (message.member.roles.cache.has("1205608645300330607")){
    message.reply('Xbox One Car Drop Active  <@&1206337681768980560>')
  } else{
    message.channel.send("You are not allowed to use this command.");
  }}})

client.on('messageCreate', (message) => {
  if (message.content === 'START PS4 CARDROP'){
    if (message.member.roles.cache.has("1205608645300330607")){
    message.reply('PS4 Car Drop Active  <@&1206646898421796964>')
  } else{
    message.channel.send("You are not allowed to use this command.");
  }}})


client.on('messageCreate', (message) => {
  if (message.content === 'START PS5 CARDROP'){
    if (message.member.roles.cache.has("1205608645300330607")){
    message.reply('PS5 Car Drop Active  <@&1206647005095526430>')
    } else{ 
      message.channel.send("You are not allowed to use this command.");
  }}})

client.on('messageCreate', (message) => {
  if (message.content === 'START PC CARDROP') {
    if (message.member.roles.cache.has("1205608645300330607")){
    message.reply('PC Car Drop Active  <@&1206647114935828510>')
  } else{
    message.channel.send("You are not allowed to use this command.");
  }}})

client.on('messageCreate', (message) => {
  if (message.content === 'START XBOX X/S CARDROP') {
    if (message.member.roles.cache.has("1205608645300330607")) {
    message.reply('Xbox X/S Car Drop Active  <@&1206646810517569578> ')
  } else{
    message.channel.send("You are not allowed to use this command.");
  }}})

client.on('messageCreate', (message) => {
  if (message.content === 'test') {
  if (message.author.id === '1204827788452823063') {
      message.reply('test')
}}})


  client.on("messageCreate", (message) => {
    if (message.content === "test2") {
        if (message.member.roles.cache.has("1205608645300330607")) {
            message.reply("You are allowed to use this command.");
        } else {
            message.channel.send("You are not allowed to use this command.");
        }}});

client.login(process.env.TOKEN);