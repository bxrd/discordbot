exports.run = (bot, message, args) => {
    message.delete();
    message.channel.send("ASCII Art!", {files: [{attachment: "ascii.txt"}]});
};