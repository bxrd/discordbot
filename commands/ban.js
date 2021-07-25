exports.run = (bot, message, args) => {
    let member = message.mentions.users.first();
    let reason = args.slice(1).join(" ");

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the correct permissions, sorry! :(");
    if(!member) return message.channel.send("I could not find that member!");
    if(member.id === message.author.id) return message.channel.send("You can't ban yourself, sorry to disappoint :(");
    if(member.hasPermission("ADMINISTRATOR")) return message.channel.send("That person has administrator permissions, I can't ban them!");

    if(!reason) {
        member.ban(`${message.author.tag}: No reason provided`)
        .then(() => {
            message.channel.send(
                new(require("discord.js")).RichEmbed()
                .setColor(0xff0000)
                .addField("Successfully banned:", member.user.tag)
                .addField("Banned by:", message.author.tag)
                .addField("Reason:", "No reason provided")
                .setThumbnail(member.user.displayAvatarURL)
                .setFooter("Don't misbehave, kids!")
                .setTimestamp()
            );
        }).then(msg => msg.delete({timeout:5000}));
    } else if(reason) {
        member.ban(`${message.author.tag}: ${reason}`)
        .then(() => {
            message.channel.send(
                new(require("discord.js")).RichEmbed()
                .setColor(0xff0000)
                .addField("Successfully banned:", member.user.tag)
                .addField("Banned by:", message.author.tag)
                .addField("Reason:", reason)
                .setThumbnail(member.user.displayAvatarURL)
                .setFooter("Don't misbehave, kids!")
                .setTimestamp()
            );
        }).catch(() => {
            message.channel.send(
                new(require("discord.js")).RichEmbed()
                .setColor(0xff0000)
                .setTitle("Error!")
                .setDescription("I cannot ban that member!")
                .setTimestamp()
            ).then(msg => msg.delete({timeout:5000}));
        });
    };
};

exports.ownerOnly = true;