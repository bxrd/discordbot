exports.run = (bot, message, args) => {
    message.delete();

    if(!args[0]) return message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xff0000).setTitle("Error!").setDescription("You need to specify a user ID!").setTimestamp());
    if(isNaN(args[0])) return message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xff0000).setTitle("Error!").setDescription("The user ID given is not a valid ID!").setTimestamp());

    bot.fetchUser(args[0]).then(fetched => {
        message.channel.send(new(require("discord.js")).RichEmbed()
            .setTitle("User ID Lookup")
            .setFooter("Requested by: " + message.author.tag, message.author.displayAvatarURL)
            .addField("Tag:", fetched.username + "#" + fetched.discriminator, true)
            .addField("Is bot:", fetched.bot ? "Yes" : "No", true)
            .addField("Creation date:", fetched.createdAt, true)
            .setThumbnail(fetched.displayAvatarURL)
            .setColor(0xbc13fe)
            .setTimestamp()
        );
    }).catch(err => message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xFF0000).setTitle("Error!").setDescription("I ran into an error whilst searching for that user ID\n\n", err).setTimestamp()));
};