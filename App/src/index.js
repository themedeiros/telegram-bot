const { Bot } = require('grammy')
require('dotenv').config()
const bot = new Bot(process.env.TOKEN);
const command_start = require('./commands/start');
const about = require('./commands/about');
const menu = require('./commands/menu');
const akbar = require('./commands/akbaiano');
const cuecabox = require('./commands/cuecabox');
bot.command("start", command_start.reply);
bot.command("about", about.reply)
bot.command("menu", menu.reply)
bot.command("akbar", akbar.reply)
bot.command("cuecabox", cuecabox.reply)
bot.start();