import dotenv from 'dotenv'
dotenv.config()

import {Client, GatewayIntentBits} from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async (message) => {
    if(message = "SHIT") {
        message.author.send(`Echo ${message.content}`)
    }
})