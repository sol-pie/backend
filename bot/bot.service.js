
import { REST, Routes } from 'discord.js';
import { Client, GatewayIntentBits, SlashCommandBuilder } from 'discord.js';
import { v4 } from 'uuid';
import OperationService from '../service/operation.service.js';

class BotService {
  constructor(OperationService) {
    this.operationService = OperationService
    this.CREATE_PASS_ACTION = 'CREATE_PASS'
  }

  async start() {
    const operationService = new this.operationService()
    console.log(operationService)
    // console.log(this.operationService)


    const commands = [
      {
        name: 'create_pass',
        description: 'Создание персонального пропуска (pass) для возможности продажи другим пользователям Discord',
      },
    ];
    
    const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);
    
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
    
    const client = new Client({ intents: [GatewayIntentBits.Guilds] });
    
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    
    client.on('interactionCreate', async interaction => {
      if (!interaction.isChatInputCommand()) return;
    
      if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
      }

      if (interaction.commandName === 'create_pass') {
        const synthId = v4()
        await operationService.create({
          id: synthId,
          action: this.CREATE_PASS_ACTION,
          issuerDiscordId: interaction.user.id,
        })
        await interaction.reply(`Перейдите по этой ссылке для подтверждения создания вашего пропуска в веб-приложении. Процесс быстр и безопасен!\n ${process.env.API_URL}/?${v4()}`)
      }
    });
    
    client.login(process.env.BOT_TOKEN);
  }
}

export const discordBot = new BotService(OperationService);
