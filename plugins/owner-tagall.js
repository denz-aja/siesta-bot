let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}❖────━•[TAG ALL]•━────❖\n` + users.map(v => '│𖥂 @' + v.replace(/@.+/, '')).join`\n` + '\n❖────────────────❖, null, {
        mentions: users
    })
}

handler.help = ['o-tagall']
handler.tags = ['owner']
handler.command = ['o-tagall']
handler.owner = true
handler.group = true

export default handler
