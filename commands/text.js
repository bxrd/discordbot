exports.run = (bot, message, args) => {
    let str = args.join("   ");
    let res = "";
    
    for(let i=0;i<str.length;i++) {
        if(str[i] == " ") res += " ";
        else res += `:regional_indicator_${str[i].toLowerCase()}:`;
    }
    
    message.delete();
    message.channel.send(res);
}