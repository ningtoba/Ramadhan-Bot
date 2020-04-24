const botgram = require("botgram")
const bot = botgram("1167757073:AAFlp1EyzfQJWe-DYD7zdAwWQMYBbqZeS-4")

bot.command("start", (msg, reply, next) => {
  console.log("Received a /start command from", msg.from.username);
});

bot.command("ping", (msg, reply, next) => {
  reply.text("hai nabil")
})

bot.command("Khatam", (msg, reply, next) => {
    reply.text("Have you read your Quran yet?")
})

bot.command("Resepi", (msg, reply, next) => {
    reply.text("Follow @khairulaming")
})

bot.command("Hadis", (msg, reply, next) => {
    reply.text("Orang yang berpuasa sedangkan mereka tidak memelihara lidah (percakapannya) dan juga masih melakukan maksiat, tidak akan diberi pahala oleh Allah SWT ke atas puasa mereka selain lapar dan dahaga sahaja.")
})

bot.command("Solat", (msg, reply, next) => {
    reply.text("Solat lah 5 waktu")
})


bot.text((msg, reply, next) => {
  console.log("Received a text message:", msg.text);
});

