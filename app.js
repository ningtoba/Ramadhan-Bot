const botgram = require("botgram")
const bot = botgram("1167757073:AAFlp1EyzfQJWe-DYD7zdAwWQMYBbqZeS-4")
const hadis = require('./functions/Hadis')
const khatam = require('./functions/Khatam')
const resepi = require('./functions/Resepi')
const solat = require('./functions/Solat')

bot.command("start", (msg, reply, next) => {
  console.log("Received a /start command from", msg.from.username);
});

bot.command("ping", (msg, reply, next) => {
  reply.text("hai nabil")
})

bot.command("Khatam", (msg, reply, next) => {
    reply.text(khatam.starter())
})

bot.command("Resepi", (msg, reply, next) => {
    reply.text(resepi.starter())
})

bot.command("Hadis", (msg, reply, next) => {
    reply.text(hadis.starter(msg))
})

bot.command("Solat", (msg, reply, next) => {
    reply.text(solat.starter())
})


bot.text((msg, reply, next) => {
  console.log("Received a text message:", msg.text);
});

