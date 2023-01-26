import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/denz-aja/cuy/main/siesta.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `❖────━•[TUGAS]•━────❖
Belum di tambahkan
`
conn.sendButtonDoc(m.chat, tqto, wm, 'NYONTEK BANG??', 'Thanks','ok', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: global.sig,
    mediaType: "VIDEO",
    description: global.sig, 
    title: wm3,
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tugas']
handler.tags = ['info']
handler.command = ['tugas']
export default handler
