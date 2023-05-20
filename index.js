const { Client, GatewayIntentBits } = require("discord.js");
const SpinTheWheel = require("./src/spin");
require("dotenv/config");

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Bot is online");
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "spin") {
    let response = SpinTheWheel();
    interaction.reply(response);
  }
});

client.login(process.env.TOKEN);
