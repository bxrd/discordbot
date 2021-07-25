exports.run = async (bot, message, args) => {
    message.delete();
    let webhook = await message.channel.createWebhook(message.mentions.users.first().username || message.mentions.users.first().user.nickname, message.mentions.users.first().avatarURL);
    let hook = new(require("discord.js")).WebhookClient(webhook.id, webhook.token);

    hook.send(args.slice(1).join(" "));
    hook.destroy();
    //hook.delete();
};