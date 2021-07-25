exports.run = (message, args) => {
    message.channel.send(args[0].split("").reverse().join(" "));
};