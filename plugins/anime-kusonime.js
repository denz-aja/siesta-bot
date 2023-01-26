import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `❖────━•[KUSONIME]•━────❖\n≼≽ *Judul:* "${json.title}"\n≼≽ *Info:* ${json.info}\n≼≽ *Sinopsis:* ${json.sinopsis}\n≼≽ *Link:* ${json.link_dl}\n❖────────────────❖`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', raku, m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i

export default handler
