require("dotenv").config();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventHandler(client, ...args));
  });
});

fs.readdir("./players/", (err,files) =>{
	files.forEach(file =>{
		const eventHandler=require(`./players/${file}`);
		const eventName=file.split(".")[0];
		client.on(eventName, (...args) => eventHander(client, ...args));
	});
});

client.login(process.env.ROLLBOT_TOKEN);
