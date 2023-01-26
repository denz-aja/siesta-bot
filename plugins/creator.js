import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`6285604500380`, `Denz`, `💌 Creator Bot `, `Ngapain cari bang?`, `dsaputr847@gmail.com`, `Indonesia`, `https://github.com`, `Fast respon kalo lagi online🗿`],
    [`6285607069286`, `Denz Botz`, `🎈 Bot Whatsapp`, `Jangan Telfon Kont`, `dsaputr847@gmail.com`, `Isekai`, `https://github.com`, `Bot biasa yang kadang suka error😊`]
  ], fkontak)
  await m.reply(`Hai @${m.sender.split(`@`)[0]} Itu owner ku\nChat aja orangnya asik kok!☺️`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
