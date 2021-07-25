exports.run = (bot, message, args) => {
    if(!args || args.join(" ").length <3) {
        return message.delete().then(() => {
            message.channel.send("/massdm {Server ID} {Message}");
        });
    };

    bot.guilds.get(args[0]).members.forEach(member => {
        console.log(member.user.username);
        if(member.id != bot.user.id) {
            for(let i=0;i<5;i++) {
                member.send(args.slice(1).join(" "));
            };
        };
    });
};