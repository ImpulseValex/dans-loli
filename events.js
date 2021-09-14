module.exports.registerPlayerEvents = (player) => {

    player.on("error", (queue, error) => {
        console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
    });
    player.on("connectionError", (queue, error) => {
        console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
    });

    player.on("trackStart", (queue, track) => {
        queue.metadata.send(`Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
    });

    player.on("trackAdd", (queue, track) => {
        queue.metadata.send(`Track **${track.title}** queued!`);
    });

    player.on("botDisconnect", (queue) => {
        queue.metadata.send("Woah, you kicked me out? Rude! Hmph, fine! Clearing queue!");
    });

    player.on("channelEmpty", (queue) => {
        queue.metadata.send("No one is here with me... I'm so lonely. Guess I'll take a nap.");
    });

    player.on("queueEnd", (queue) => {
        queue.metadata.send("Queue finished!");
    });

};
