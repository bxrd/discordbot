const ytdl = require("ytdl-core");
const {createWriteStream} = require("fs");

exports.run = async (bot, message, args) => {
    message.delete();

    if(!ytdl.validateURL(args[0])) return message.channel.send(new(require("discord.js")).MessageEmbed(0xFF0000).setTitle("Alert!").setDescription("Please enter a valid URL!"));

    message.author.send("Please wait!");

    let info = await ytdl.getInfo(args[0]);
    let name = `${info.videoDetails.title}.mp4`;
    let file = createWriteStream(name);
    let stream = ytdl(args[0]);

    stream.pipe(file);
    stream.on("end", () => {
        message.author.send({
            files: [{attachment: name}]
        }).catch(error => message.author.send(
            new(require("discord.js")).RichEmbed()
            .setColor(0xff0000)
            .setTitle("Error!")
            .setDescription(`Something went wrong while downloading, please try again!\n\n${error}`)
            .setFooter("Remember, piracy is illegal!")
            .setTimestamp()
        ));
    });
};