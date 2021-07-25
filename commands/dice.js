exports.run = (bot, message, args) => {
    message.delete();
    let minnum = 0;
    let maxnum = 100;

    message.channel.send(new(require("discord.js")).RichEmbed().setTitle("RNG").setDescription(Math.floor(Math.random() * maxnum) + minnum).setTimestamp());
}