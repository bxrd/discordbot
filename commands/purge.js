exports.run = (bot, message, args) => {
    message.delete();
    if(isNaN(args[0])) {message.channel.send("That's not a valid number!\nTrying ``/purge 5`` in 3 seconds.."); setTimeout(function() {message.channel.bulkDelete(5,true)}, 3000)}
    else if(args[0] < 2 || args[0] > 100) return message.channel.send("You need to enter a number between 2 and 200");
    else if(args[0] > 2 || args[0] < 100) message.channel.bulkDelete(args[0], true);
};