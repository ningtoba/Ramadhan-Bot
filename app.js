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
  reply.text("pong")
})

bot.command("Khatam", (msg, reply, next) => {
  khatam.starter(msg, reply)
})

bot.command("Resepi", (msg, reply, next) => {
  resepi.starter(msg, reply)
})

bot.command("Hadis", (msg, reply, next) => {
  hadis.starter(msg, reply)
})

bot.command("Solat", (msg, reply, next) => {
  solat.starter(msg, reply)
})

bot.command("time", function (msg, reply, next) {
  reply.text("The current time is: " + Date());
});


bot.text((msg, reply, next) => {
  console.log("Received a text message:", msg.text);
});

