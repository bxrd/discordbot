exports.run = (bot, message, args) => {
    message.delete();
      
    if(!message.guild) return message.reply("That only works in a server, not in a DM!");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You do not have the permissions to run that command!");

    let member = message.mentions.users.first();
    if(!member) return message.reply("Please mention a member to kick!");

    if(member.id === message.author.id) return message.reply("You cannot kick yourself, sorry :(");
    if(member.hasPermission("ADMINISTRATOR")) return message.reply("That person has administrator privileges, I cannot kick them!");

    let reason = args.slice(1).join(" ");
    if(!reason) {
        member.kick(`${message.author.tag}: No reason provided`)
        .then(() => {
            message.channel.send(
                new(require("discord.js")).RichEmbed()
                .addField("Successfully kicked:", member.user.tag)
                .addField("Reason:", "No reason provided")
                .setThumbnail(member.user.displayAvatarURL)
                .setColor(0xff0000)
                .setFooter("Don't misbehave, kids!")
                .setTimestamp()
            );
        })
        .catch(error => message.channel.send("I cannot kick that member.\n" + error));
    } else if(reason) {
        member.kick(`${message.author.tag}: ${reason}`)
        .then(() => {
            new(require("discord.js")).RichEmbed()
                .addField("Successfully kicked:", member.user.tag)
                .addField("Kicked by:", member.user.tag)
                .addField("Reason:", reason)
                .setThumbnail(member.user.displayAvatarURL)
                .setColor(0xff0000)
                .setFooter("Don't misbehave, kids!")
                .setTimestamp()
        }).catch(error => message.channel.send("I cannot kick that member.\n" + error));
    };
};