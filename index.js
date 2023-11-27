const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on("messageCreate", (message) => {
    console.log(message.content)
  if(message.author.bot) return;
  message.reply({
    content:"Hi from Bot"
  })
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login("MTE3ODUyMjIzNDQyMDIxMTc4Mw.GSalKJ.gRrNOcQyt1HJksepY3QspeIF8KuD7UdSN987MM");