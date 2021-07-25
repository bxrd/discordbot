exports.run = (bot, message, args) => {
    message.delete();

    let user = message.mentions.users.first() || message.author;

    message.channel.send(
        new(require("discord.js"))
        .setColor(0xbc13fe)
        .setImage(user.displayAvatarURL)
        .setFooter("Requested by:" + message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
    );
};