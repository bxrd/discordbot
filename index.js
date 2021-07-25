const bot = new(require("discord.js")).Client();
const ownerOnly = ["727608168041021591"];
const prefix = "/";

bot.login("ODQ5MzkyNDQ3NDgxNTc3NTIy.YLagXA.fIVlLYAJ-tfXTRYu6F9ymY5oBBw");
// bot ODE4OTQ5MjQzNTY1NzY4NzM1.YEff6w.yFHNgnGMyA1ppH1COYwXUBCt-vw
// old NzI3NjA4MTY4MDQxMDIxNTkx.YHM1FQ.tKN9XF-ZR1f_6dlKiOIrsLRNwqU
// new Nzk0MzU2NDI1MTEwMzIzMjEw.YLfFEg.SC2A1RhMbZSIzeT8qw2gXmwcGoM
// ODQ5MzkyNDQ3NDgxNTc3NTIy.YLagXA.fIVlLYAJ-tfXTRYu6F9ymY5oBBw

bot.on("ready", () => {
    console.clear();
    console.log(`${bot.user.tag} : ${new Date(Date.now() + 7200000).toUTCString()}`); // for winter time use: + 3600000
});

bot.on("message", (message) => {
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let path = `./commands/${args.shift().toLowerCase()}.js`;

    if(!require("fs").existsSync(path)) return;

    const command = require(path);

    if(command.ownerOnly && ownerOnly.includes(message.author.id)) command.run(bot, message, args);
    if(!command.ownerOnly || command.ownerOnly) command.run(bot, message, args);
    else message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xff073a).setTitle("Alert!").setDescription("User is not permitted to use this command."));
});

bot.on("message", (message) => {
    if(message.content.startsWith("prefix")) {
        message.delete();
        message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xbc13fe).setTitle("Prefix: " + prefix).setTimestamp());
    };
});

bot.on("messageDelete", (m) => {
    if(m.author.bot) return;
    let x = require(`${__dirname}/snipe.json`);
    x[m.channel.id] = [m.author.id, m.content, m.attachments.first() ? m.attachments.first().proxyURL : undefined];
    require("fs").writeFileSync(`${__dirname}/snipe.json`, JSON.stringify(x, null, 2));
});