let handler = async (m, { conn, isOwner }) => {
	let groups = Object.values(await conn.groupFetchAllParticipating())
	
	let str = Object.keys(groups).map((i, index) => {
        return `❖────━•[GROUPS]•━────❖
≼≽ *Name:* ${groups[i].subject}
≼≽ *Owner:* ${groups[i].owner ? "@" + groups[i].owner.split("@")[0] : "Unknown"}
≼≽ *Subject Owner:* ${groups[i].subjectOwner ? "@" + groups[i].subjectOwner.split("@")[0] : "Unknown"}
≼≽ *ID:* ${groups[i].id}
≼≽ *Restrict:* ${groups[i].restrict}
≼≽ Announce:* ${groups[i].announce}
≼≽ *Ephemeral:* ${new Date(groups[i].ephemeralDuration* 1000).toDateString()}
≼≽ *Desc ID:* ${groups[i].descId}
≼≽ *Description:* ${groups[i].desc?.toString().slice(0, 10) + '...' || 'unknown'}
≼≽ *Admins:* ${groups[i].participants.filter(p => p.admin).map((v, i) => `\n${dmenub} ${i + 1}. @${v.id.split('@')[0]}`).join(' [admin]')}
${isOwner ? `≼≽ *Participants:* ${groups[i].participants.length}` : ''}
${isOwner ? `≼≽ *isBotAdmin:* [ ${!!groups[i].participants.find(v => v.id == conn.user.jid).admin} ]` : ''}
≼≽ *Created:* ${new Date(groups[i].subjectTime* 1000).toDateString()}
≼≽ *Creation:* ${new Date(groups[i].creation* 1000).toDateString()}
≼≽ *Size:* ${groups[i].size}
❖────────────────❖`.trim()
    }).join('\n\n')
    await conn.sendButtonImg(m.chat, thumb, str, author, 'ʙᴀᴄᴋ ᴛᴏ ᴍᴇɴᴜ', '.menu', fakes, adReply)
}

handler.help = ['groups', 'grouplist']
handler.tags = ['group']
handler.command = /^((gro?ups?list)|(listgro?ups?)|(listgc))$/i

export default handler
