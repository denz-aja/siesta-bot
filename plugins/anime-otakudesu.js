import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
❖────━•[OTAKUDESU]•━────❖
≼≽ *Judul:* ${result.judul}
≼≽ *Jepang:* ${result.jepang}
≼≽ *Rate:* ${result.rate}
≼≽ *Produser:* ${result.produser}
≼≽ *Tipe:* ${result.tipe}
≼≽ *Status:* ${result.status}
≼≽ *Episode:* ${result.episode}
≼≽ *Durasi:* ${result.durasi}
≼≽ *Rilis:* ${result.rilis}
≼≽ *Studio:* ${result.studio}
≼≽ *Genre:* ${result.genre}
≼≽ *Desc:* ${result.desc}
≼≽ *Batch:* ${result.batch}
❖────────────────❖
≼≽ *BatchSD:* ${result.batchSD}
≼≽ *BatchHD:* ${result.batchHD}
❖────────────────❖
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, 'menu', '.menu', m)
}

handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i

export default handler
