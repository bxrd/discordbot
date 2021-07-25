exports.run = async (bot, message) => {
    const options = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
    const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
    const args = message.content.trim().split(/ +/g);
    let question = [];
    let choices = [];
    let content = [];
    let match;

    message.delete();
    for(let i=1;i<args.length;i++) {
        if(args[i].startsWith('"')) break;
        else question.push(args[i]);
    };

    question = question.join(" ");

    while(match = regex.exec(args.join(" "))) choices.push(match[2]);
    for(let i=0;i<choices.length;i++) content.push(`${options[i]} ${choices[i]}`);
    content = content.join("\n");

    message.channel.send(`:bar_chart: ${message.author} **started a poll**`, new(require("discord.js")).RichEmbed().setColor(0xbc13fe).setTitle(`**Poll |** ${question}`).setDescription(content).setTimestamp()).then(async m => {for(let i=0;i<choices.length;i++) await m.react(options[i])});
};