const { SlashCommand } = require('slash-create');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "shuffle",
            description: "Shuffles the queue",

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {

        const { client } = require('..');

        await ctx.defer();

        const queue = client.player.getQueue(ctx.guildID);
        if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: "❌ | No music is being played!" });
        
        await queue.shuffle();
        
        ctx.sendFollowUp({ content: "I'm not that good at shuffling, but I tried, Onii-chan!" });
    }
}
