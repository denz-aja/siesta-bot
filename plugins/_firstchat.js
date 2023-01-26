import moment from 'moment-timezone';

export async function before(m) {
    if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

    let user = global.db.data.users[m.sender]
    let txt = `Hai, ${ucapan()} ${conn.getName(m.sender)}
${user.banned ? '📮Maaf, kamu dibanned & Tidak bisa menggunakan bot ini lagi' : `Ada yang bisa Denz Botz bantu?`}`.trim()

    if (new Date() - user.pc < 600000) return // waktu ori 21600000 (6 jam)
    await this.sendButton(m.chat, txt, user.banned ? wm : 'Note: Kalo BOT Off hubungi owner', [user.banned ? 'Owner' : 'Menu', user.banned ? '.creator' : '.menu'], m)
    user.pc = new Date * 1
}


function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat Dinihari 🌌"
    if (time >= 4) {
        res = "Selamat Pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat Siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat Malam 🌃"
    }
    return res
}
