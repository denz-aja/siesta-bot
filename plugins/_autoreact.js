let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['๐จ','๐','๐','๐ณ','๐', '๐ฅต', '๐ฑ', '๐ฆ', '๐', '๐ค','๐ฟ','๐ฆ','๐คจ','๐ฅด','๐','๐','๐', '๐','๐'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = ['den','bilek','cok','p','banh','bang','hoi','cuy','oi','bangsat']
handler.command = new RegExp

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
