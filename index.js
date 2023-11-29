const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});

// this map will store if the user has been greeted once or not.
const greetedUsers = new Map();

client.on('messageCreate', (message) => {
  if (message.author.bot) return;  //if the author of the message is bot itself, then it will not reply to its very own message. thus stoping the loop of the greeting messages.

    // this checks if the user has been greeted earlier or not, if the user has already been greeted this step will not execute, otherwise, it will run.
    if (!greetedUsers.has(message.author.id)) {
      message.reply({
        // now this will always mention the user that has joined and texted in the conversation. also, it will show a welcome message, adn give them a overall rules guide.
        content: `Hello, ${message.author.username}!, welcome to the channel.   
          We are very happy to have you as a member.
          There are some rules that we follow in this channel which are:
              Rule 1: Be respectful to others.
              Rule 2: No spamming or excessive use of caps.
              Rule 3: No NSFW content.
          We hope that you follow them and have a wonderful time with us.`,
      });
  
      // this part will mark the user as greeted and will not execute the above given code anytime the user uses the chat.
      greetedUsers.set(message.author.id, true);
    }




  // initial greeting part ends here.
  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  
  //this will check if the bot is mentioned in the comment/message so that the bot can interact with the messager.
  if (message.mentions.has(client.user.id)) {
    message.reply('Hello, How can I help you?');
  }


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  // this command will provide the user with a set of rules if they want to see the rules again.
  if (message.content.toLowerCase() === '!rules') {   //this will prevent against any miscommunication due to lowercase letters.
    const rules = [
      'Rule 1: Be respectful to others.',
      'Rule 2: No spamming or excessive use of caps.',
      'Rule 3: No NSFW content.',
    ];

    const rulesMessage = rules.join('\n');  //this will join all the rules into one message and the \n is used as a saperator.
    message.reply(`**Server Rules:**\n${rulesMessage}`);  // thsi will show the rules in the chat.
  }
});



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// this part of the code is a command that replies with a pong when the users enter /ping in the chat.
client.on('ready', () => {
  client.guilds.cache.forEach((guild) => {
    guild.commands.create({
      name: 'ping',
      description: 'Replies with Pong!',
    });
  });
});

// this will work as the interaction from the bot side.
client.on('interactionCreate', async (interaction) => {
  console.log('Interaction received:', interaction);

  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {  //this is the command that we'll have to write
    console.log('Ping command received!');
    await interaction.reply('Pong!');  //this is the response to the command.
  }
});



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// this part of the code is a command that replies with a pong when the users enter /ping in the chat.
client.on('ready', () => {
  client.guilds.cache.forEach((guild) => {
    guild.commands.create({
      name: 'roll',
      description: 'rolls a dice!',
    });
  });
});

// this will work as the interaction from the bot side.
client.on('interactionCreate', async (interaction) => {
  console.log('Interaction received:', interaction);

  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'roll') {  //this is the command that we'll have to write
    const result = Math.floor(Math.random() * 6) + 1;
    await interaction.reply(`You rolled a ${result}!`);
  }
});



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// this part of the code is a command that replies with a pong when the users enter /ping in the chat.
client.on('ready', () => {
  client.guilds.cache.forEach((guild) => {
    guild.commands.create({
      name: 'random',
      description: 'picks a random number between 1 and 100!',
    });
  });
});

// this will work as the interaction from the bot side.
client.on('interactionCreate', async (interaction) => {
  console.log('Interaction received:', interaction);

  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'random') {  //this is the command that we'll have to write
    
    const result = Math.floor(Math.random() * 100) + 1;
    await interaction.reply(`Random Number for you is: ${result}!`);
  }
});


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





// thsi is the token id for the bot itself.(i will change it after uploading it on github.)
client.login(your bot token here");
