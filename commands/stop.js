const { SlashCommand } = require('slash-create');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "stop",
            description: "Stop the player",

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run(ctx) {
        
        const { client } = require('..');

        await ctx.defer();
        const queue = client.player.getQueue(ctx.guildID);
        if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: "Umm, Onii-chan? Music has to be playing before you can stop it..." });
        queue.destroy();
        return void ctx.sendFollowUp({ content: "Okay, Onii-chan! I stopped it for you!" });

    }
}
