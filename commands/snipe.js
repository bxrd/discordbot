exports.run = async (bot, message, args) => {
    message.delete();

    let snipes = require("./../snipe.json");
    let snipe = snipes[message.channel.id];
    if(!snipe) return message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xff0000).setTimestamp().setTitle("Alert!").setDescription("There are no logged messages yet!"));

    let user = await bot.fetchUser(snipe[0]);
    console.log(user);

    message.channel.send(
        new(require("discord.js")).RichEmbed()
        .setAuthor(user.tag, `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`)
        .setDescription(snipe[1] || "** **")
        .setColor(0xff595e)
        .setImage(snipe[2])
    );
}

exports.ownerOnly = true;