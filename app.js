const botgram = require("botgram")
const bot = botgram("1167757073:AAFlp1EyzfQJWe-DYD7zdAwWQMYBbqZeS-4")

bot.command("start", (msg, reply, next) => {
  console.log("Received a /start command from", msg.from.username);
});

bot.command("ping", (msg, reply, next) => {
  reply.text("hai nabil")
})

bot.text((msg, reply, next) => {
  console.log("Received a text message:", msg.text);
});