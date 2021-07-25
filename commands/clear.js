exports.run = (bot, message, args) => {
  message.delete();
  for(let i=0;i<5;i++) message.channel.send("_ _\n".repeat(2000/5));
}