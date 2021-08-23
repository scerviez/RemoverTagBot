const { Telegraf} = require("telegraf");
const n = new Telegraf(process.env.token)

n.start((ctx) => ctx.reply('Hello! Im remover tag bot. Fordward a message'))

n.on('message', (ctx) => {
    ctx.copyMessage(ctx.message.chat.id)
   })
n.launch()
