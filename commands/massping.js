exports.run = (bot, message, args) => {
    message.guild.channels.forEach(ch => {
        if(ch.type != "text") return;
        for(let i=0;i<5;i++) ch.send("@everyone").then(m => m.delete({timeout:125}));
    });
};

exports.ownerOnly = true;