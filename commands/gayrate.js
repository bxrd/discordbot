exports.run = (bot, message, args) => {
    message.delete();

    let max = 100;

    message.channel.send(new(require("discord.js")).RichEmbed()
        .setColor("BLACK")
        .setTitle("Vinny's Gay Rator")
        .setDescription(message.author + " is " + Math.floor(Math.random() * max) + "% gay :rainbow_flag:")
    );
}