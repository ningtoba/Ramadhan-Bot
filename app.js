const telegraf = require('telegraf')
const config = require('./config')
const hadis = require('./functions/Hadis')
const khatam = require('./functions/Khatam')
const resepi = require('./functions/Resepi')
const solat = require('./functions/Solat')

const bot = new telegraf(config.token)

bot.start((ctx) => ctx.reply('Welcome'))

bot.command("ping", (ctx) => {
  reply.text("pong")
})

bot.command("Khatam", (ctx) => {
  khatam.starter(ctx)
})

bot.command("Resepi", (ctx) => {
  resepi.starter(ctx)
})

bot.command("Hadis", (ctx) => {
  hadis.starter(ctx)
})

bot.command("Solat", (ctx) => {
  solat.starter(ctx)
})

bot.command("time", function (ctx) {
  ctx.reply("The current time is: " + Date());
});


bot.use((ctx) => {
  console.log("Received a text message:", ctx.message.text);
});

bot.launch()
