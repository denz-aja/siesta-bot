import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Mau cari apa?'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video š„', usedPrefix + 'ytv ' + v.url + ' yes', '\nā Duration: ' + v.durationH + '\nā²ļø Uploaded: ' + v.publishedTime + '\nšļø Views: ' + v.view + '\nš Url: ' + v.url],
          ['Audio š§', usedPrefix + 'yta ' + v.url + ' yes', '\nā Duration: ' + v.durationH + '\nā²ļø Uploaded: ' + v.publishedTime + '\nšļø Views: ' + v.view + '\nš Url: ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, 'āāāāāāā¢[DASHBOARD]ā¢āāāāāā', `Silahkan pilih type di bawah...\n*Teks yang anda minta:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`, author, `YouTube Search š`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
