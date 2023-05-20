require("dotenv/config");
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "spin",
    description: "Spin to generate a new fit",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering Slash Commands");
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log("Registered Slash Commands");
  } catch (err) {
    console.log(err);
  }
})();
