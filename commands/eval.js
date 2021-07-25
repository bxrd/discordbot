exports.run = (bot, message, args) => {
    try {message.channel.send(eval(args.join(" ")))}
    catch(error) {message.channel.send(new(require("discord.js")).RichEmbed().setColor(0xff0000).setTitle("Error!").setDescription(error))};
};

/*exports.run = async (bot, message, args) => {
    let evaled;

    try {evaled = eval(args.join(" "))}
    catch(err) {
        message.channel.send(
            new(require("discord.js")).RichEmbed()
            .setTitle("Eval 🚀")
            .addField("Input:", `\`\`\`${args.join(" ")}\`\`\``)
            .addField("\u200b", "\u200b")
            .addField("Output:", `\`\`\`${err}\`\`\``)
            .setFooter("Status: Failure ❌")
        );
    };

    message.channel.send(
        new(require("discord.js")).RichEmbed()
        .setTitle("Eval 🚀")
        .addField("Input:", `\`\`\`${args.join(" ")}\`\`\``)
        .addField("\u200b", "\u200b")
        .addField("Output:", `\`\`\`${evaled}\`\`\``)
        .setFooter("Status: Success ✔")
        .setColor(0x00ff00)
    );
};

exports.ownerOnly = true;*/