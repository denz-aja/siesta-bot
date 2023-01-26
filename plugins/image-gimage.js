import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
❖────━•[IMAGE]•━────❖
≼≽ *Result:* ${text}
≼≽ *Source:* Google
❖────────────────❖
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['image <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i

export default handler
