// Script Ori By BochilGaming

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `
❖────━•[INFO USER]•━────❖
│𖥂︎︎︎ *Name:* %name
│𖥂︎︎︎ *Tag:* %tag
│𖥂︎︎︎ *Premium:* %prems
│𖥂︎︎︎ *Limit:* %limit
│𖥂︎︎︎ *Money:* %money
│𖥂︎︎︎ *Role:* %role
│𖥂︎︎︎ *Xp:* %exp / %maxexp
│𖥂︎︎︎ *Total Xp:* %totalexp
❖────━•[TODAY]•━────❖
│   *${ucapan()} %name!*
│𖥂︎︎︎ *Tanggal:* %week %weton
│𖥂︎︎︎ *Date:* %date
│𖥂︎︎︎ *Tanggal Islam:* %dateIslamic
❖────━•[INFO BOT]•━────❖
│𖥂︎︎︎ *Nama Bot:* Denn-MD
│𖥂︎︎︎ *Mode:* %mode
│𖥂︎︎︎ *Prefix:* [ *%_p* ]
│𖥂︎︎︎ *Baileys:* Multi Device
│𖥂︎︎︎ *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│𖥂︎︎︎ *Platform:* %platform
│𖥂︎︎︎ *Type:* Node.Js
│𖥂︎︎︎ *Uptime:* %muptime
│𖥂︎︎︎ *Database:* %rtotalreg
❖────━•[INFO CMD]•━────❖
│ *Ⓟ* = Premium
│ *Ⓛ* = Limit
❖────────────❖
%readmore
`.trimStart(),
  header: '❖──━•[ %category ]•━───❖',
  body: '│𖥂︎︎︎ %cmd %isPremium %islimit',
  footer: '❖───────────❖\n',
  after: `%c4`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'maker', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'group', 'premium', 'internet', 'anonymous', 'downloader', 'tools', 'fun', 'database', 'quran', 'nsfw', 'audio', 'info', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'group': 'Group',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'info': 'Info',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
   
   const sections = [
   {
	title: `━━━━━▢「 SISTEM 」 ▢━━━━━`,
	rows: [
	    {title: `» Speed BOT`, rowId: ".ping", description: "╰► Berapa kecepatan respon BOT?"},
	    {title: `» Runtime BOT`, rowId: ".runtime", description: "╰► Berapa lama BOT Online?"}, 
	    {title: `» Owner BOT`, rowId: ".creator", description: "╰► Siapa pemilik Bot?"},
	]
	},{
	title: `━━━━━▢「 MENU 」 ▢━━━━━`,
	rows: [
	    {title: `» All Menu`, rowId: ".? all", description: "╰► Waduhh.. Langsung semuanya (≧▽≦)"},
	    {title: `» Rpg`, rowId: ".? rpg", description: "╰► Calon anak petualang nih... :3"},
	{title: `» Exp`, rowId: ".? xp", description: "╰► Kalau dah level 100 dapat hadiah (≧▽≦)"},
	{title: `» Game`, rowId: ".? game", description: "╰► Gamenya seru seru lho (๑˃̵　ᴗ　˂̵)"},
	{title: `» Fun`, rowId: ".? fun", description: "╰► Fitur gabut ygy!"},
	{title: `» Kerang Ajaib`, rowId: ".? kerangajaib", description: "╰► Mau tanya apa sih? (≧▽≦)"},
	{title: `» Quotes`, rowId: ".? quotes", description: "╰► Ada yang mau cari topik nih >.<"},
	{title: `» Anime`, rowId: ".? anime", description: "╰► Lahh wibu... Owner juga wibu sih (≧▽≦)"},
	{title: `» Nsfw`, rowId: ".? nsfw", description: "╰► Anak kecil ga boleh ya :v"},
	{title: `» Premium`, rowId: ".? premium", description: "╰► Khusus Premium >.<"},
	{title: `» Anonymous Chats`, rowId: ".? anonymous", description: "╰► Ada yang mau chat crush nih (≧▽≦)"},
	{title: `» Al-Quran`, rowId: ".? quran", description: "╰► Tobat yuk!!"},
	{title: `» Internet`, rowId: ".? internet", description: "╰► Yandex ga ada ya (≧▽≦)"},
	{title: `» Downloaders`, rowId: ".? downloader", description: "╰► Jangan download yang aneh-aneh >.<"},
	{title: `» Stikers`, rowId: ".? stiker", description: "╰► Fotomu jadikan stiker bagus tuh (≧▽≦)"},
	{title: `» Maker`, rowId: ".? maker", description: "╰► Bikin apa ya enaknya..?"},
	{title: `» Audio`, rowId: ".? audio", description: "╰► Calon remixer nih (≧▽≦)"},
	{title: `» Group`, rowId: ".? group", description: "╰► Khusus group >.<"},
	{title: `» Database`, rowId: ".? database", description: "╰► Simpan apa tuh? (≧▽≦)"},
	{title: `» Tools`, rowId: ".? tools", description: "╰► Butuh apa? >.<"},
	{title: `» Info`, rowId: ".? info", description: "╰► Info link kak? (≧▽≦)"},
	{title: `» Owner`, rowId: ".? owner", description: "╰► Khusus Owner >.<"},
	]
  },
]

let tek = `❖────━•[DASHBOARD]•━────❖
│ ${ucapan()} ${conn.getName(m.sender)}
❖────────────────❖
│𖥂︎︎ Aktif selama ${mpt}
│𖥂︎︎ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│𖥂︎︎ Prefix : [ ${_p} ]
│𖥂︎︎ ${Object.keys(global.db.data.users).length} Chat user
│𖥂︎︎ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
│𖥂︎︎ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
❖────────────────❖
│ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ Udah Shalat ??
❖────────────────❖`
const listMessage = {
  text: tek,
  footer: wm2,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `Klik Disini ⎙`, 
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  
    let urls = pickRandom(["https://telegra.ph/file/3e235c42852363ab109c9.jpg", "https://telegra.ph/file/203af29bf0f181e1d76a0.jpg", "https://telegra.ph/file/199131e9088f97dca2f42.jpg", "https://telegra.ph/file/1186f4ad5a4fa7146a6f0.jpg", "https://telegra.ph/file/6a73bd06989983233fe51.jpg", "https://telegra.ph/file/0e05b343c46a0972373d8.jpg", "https://telegra.ph/file/0cb9e6fe64a1e4ac2707a.jpg", "https://telegra.ph/file/77c3f0481b1396a2055ae.jpg", "https://telegra.ph/file/539e41dcbd9a83767dd6a.jpg"])
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(flaaa + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    
    const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(flaaa + 'Loading')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.reply(m.chat, 'Tunggu Sebentar Kak. . .', ftrol) 
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
   //~~~Source : https://github.com/Rlxfly
    //------- MENU LOCATION
    /*const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 34.672314,
  degreesLongitude: 135.484802,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: text.trim(),
  sequenceNumber: 774236889,
  timeOffset: 8600,
  jpegThumbnail: await(await fetch(thumb)).buffer(),
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m
					})

return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })*/

//-------DOC TEMPLATE
    const message = { 
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(urls)).buffer(),
            fileName: wm,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/denz-aja'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Instagram',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner🎐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speed⚡',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi💵',
                        id: '.donasi'
                    }
                },
            ]
        }
       //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
        //MAIN MENU
      /*conn.sendButton(m.chat, `*${ucapan()}, ${name} 👋*`, text.trim(), await genProfile(conn, m), [['Speedtest', _p + 'speedtest'], ['Owner', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: global.sig,
    mediaType: "VIDEO",
    description: global.sig, 
    title: wm,
    body: 'Here List Menu',
    thumbnail: thumb,
    sourceUrl: sgc
}
} })*/

    //------------------- 2BUTTON VID
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: 'Made with denz-aja', templateButtons: [{ quickReplyButton: { displayText: 'Speedtest⚡', id: `${_p}speedtest` }}, { quickReplyButton: { displayText: 'Owner🎀', id: `${_p}owner` }} ] })
    
    //------------------- Payment MENU
    /*await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 50000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
      
     //---Made By @ImYanXiao
    // Mampus Di Enc 🧢
    // Gausah Dihapus, Thx
    //------------------ BUTTONDOC WITH EXTERNALADS NEW
    //---Versi 1
      const _0xcdaec6=_0xfc88;(function(_0x121742,_0x178b98){const _0x38fd3d=_0xfc88,_0x4a08e1=_0x121742();while(!![]){try{const _0x4c2f0e=parseInt(_0x38fd3d(0x184))/0x1*(-parseInt(_0x38fd3d(0x182))/0x2)+parseInt(_0x38fd3d(0x180))/0x3*(parseInt(_0x38fd3d(0x178))/0x4)+-parseInt(_0x38fd3d(0x172))/0x5*(parseInt(_0x38fd3d(0x17d))/0x6)+parseInt(_0x38fd3d(0x175))/0x7+parseInt(_0x38fd3d(0x170))/0x8*(parseInt(_0x38fd3d(0x17f))/0x9)+parseInt(_0x38fd3d(0x183))/0xa*(-parseInt(_0x38fd3d(0x17c))/0xb)+parseInt(_0x38fd3d(0x177))/0xc;if(_0x4c2f0e===_0x178b98)break;else _0x4a08e1['push'](_0x4a08e1['shift']());}catch(_0x5a7895){_0x4a08e1['push'](_0x4a08e1['shift']());}}}(_0x1e1d,0xb6f4f));let buttonMessage={'document':{'url':sgh},'mimetype':global[_0xcdaec6(0x174)],'fileName':wm,'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x1,'previewType':_0xcdaec6(0x17e),'title':global['titlebot'],'thumbnail':fs[_0xcdaec6(0x173)](_0xcdaec6(0x17a)),'renderLargerThumbnail':!![],'sourceUrl':sgh}},'caption':botdate,'footer':text[_0xcdaec6(0x171)](),'buttons':[{'buttonId':_0xcdaec6(0x181),'buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':0x1},{'buttonId':'.donasi','buttonText':{'displayText':_0xcdaec6(0x17b)},'type':0x1},{'buttonId':'.ping','buttonText':{'displayText':_0xcdaec6(0x176)},'type':0x1}],'headerType':0x6};function _0x1e1d(){const _0x440cac=['1DpiOFm','sendMessage','2096CoEGkm','trim','2129165rZblhf','readFileSync','ddocx','3582075TFXWzi','ᴘɪɴɢ','7187508hdCpab','1898140ArSHbI','chat','./thumbnail.jpg','ᴅᴏɴᴀsɪ','192181QRobng','12waBWOl','pdf','30798xkQxmC','9mzUDLL','.menu','1598014Ltrowh','590FrCHEB'];_0x1e1d=function(){return _0x440cac;};return _0x1e1d();}function _0xfc88(_0x2e3128,_0x1e767f){const _0x1e1d41=_0x1e1d();return _0xfc88=function(_0xfc884e,_0x1a1e73){_0xfc884e=_0xfc884e-0x170;let _0x163d50=_0x1e1d41[_0xfc884e];return _0x163d50;},_0xfc88(_0x2e3128,_0x1e767f);}await conn[_0xcdaec6(0x185)](m[_0xcdaec6(0x179)],buttonMessage,{'quoted':fkontak});
    //---Versi 2
     //function _0x20c1(_0x3d1dba,_0x1a315e){const _0x1aaa67=_0x1aaa();return _0x20c1=function(_0x20c1f6,_0x54b096){_0x20c1f6=_0x20c1f6-0x1c6;let _0x4ac527=_0x1aaa67[_0x20c1f6];return _0x4ac527;},_0x20c1(_0x3d1dba,_0x1a315e);}const _0x254aec=_0x20c1;(function(_0xc90ae0,_0x2a9661){const _0x18cea6=_0x20c1,_0x2d6908=_0xc90ae0();while(!![]){try{const _0x2ba2f0=-parseInt(_0x18cea6(0x1d8))/0x1+parseInt(_0x18cea6(0x1c6))/0x2*(parseInt(_0x18cea6(0x1d3))/0x3)+-parseInt(_0x18cea6(0x1d7))/0x4*(-parseInt(_0x18cea6(0x1d1))/0x5)+parseInt(_0x18cea6(0x1da))/0x6*(parseInt(_0x18cea6(0x1db))/0x7)+parseInt(_0x18cea6(0x1d5))/0x8*(-parseInt(_0x18cea6(0x1cc))/0x9)+parseInt(_0x18cea6(0x1ca))/0xa*(-parseInt(_0x18cea6(0x1cf))/0xb)+parseInt(_0x18cea6(0x1c9))/0xc;if(_0x2ba2f0===_0x2a9661)break;else _0x2d6908['push'](_0x2d6908['shift']());}catch(_0x1f7d38){_0x2d6908['push'](_0x2d6908['shift']());}}}(_0x1aaa,0xbc66e));function _0x1aaa(){const _0x36844b=['386768jYCpaP','.ping','8723532zYlQfN','7fscaTt','912466cACkPE','readFileSync','AllMenu','5611548ebnrCK','1090xslGJh','Donasi','9ctfOjB','trim','sendMessage','69872JqHKkt','sig','4108735YfQyZP','./thumbnail.jpg','3CgyrmQ','titlebot','10789608ysbGEy','pdf','4fZdsjl'];_0x1aaa=function(){return _0x36844b;};return _0x1aaa();}let buttonMessage={'document':{'url':sgc},'mimetype':global['ddocx'],'fileName':wm,'fileLength':fsizedoc,'pageCount':fpagedoc,'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':global[_0x254aec(0x1d0)],'mediaType':0x2,'previewType':_0x254aec(0x1d6),'title':global[_0x254aec(0x1d4)],'body':global[_0x254aec(0x1d4)],'thumbnail':fs[_0x254aec(0x1c7)](_0x254aec(0x1d2)),'sourceUrl':snh}},'caption':botdate,'footer':text[_0x254aec(0x1cd)](),'buttons':[{'buttonId':_0x254aec(0x1d9),'buttonText':{'displayText':'Ping'},'type':0x1},{'buttonId':'.?\x20all','buttonText':{'displayText':_0x254aec(0x1c8)},'type':0x1},{'buttonId':'.donasi','buttonText':{'displayText':_0x254aec(0x1cb)},'type':0x1}],'headerType':0x6};await conn[_0x254aec(0x1ce)](m['chat'],buttonMessage,{'quoted':fkontak});

     //------------------- 2BUTTON LOCATION
    /*conn.sendButton(m.chat, `${ucapan()}﹗`, text.trim(), `${timeimg()}`, [
      ['🎏 ᴍᴇɴᴜ', `${_p}menu`],
      ['⚡ sᴘᴇᴇᴅᴛᴇsᴛ', `${_p}speedtest`]
    ], m, {asLocation: true}))*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak?"
  if (time >= 4) {
    res = "Selamat pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat malam 🌃"
  }
  return res
}
function timeimg() {
    let imgloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  imgloc = ('./media/siesta8.png')
  if (time >= 0) {
    imgloc = ('./media/siesta.png')
  }
  if (time >= 4) {
    imgloc = ('./media/siesta2.png')
  }
  if (time >= 8) {
    imgloc = ('./media/siesta3.png')
  }
  if (time >= 12) {
    imgloc = ('./media/siesta4.png')
  }
  if (time >= 16) {
    imgloc = ('./media/siesta5.png')
  }
  if (time >= 20) {
    imgloc = ('./media/siesta6.png')
  }
  if (time >= 24) {
    imgloc = ('./media/siesta7.png')
  }
  return imgloc
}
