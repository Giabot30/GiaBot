let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*โช๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `*โบ๐๐๐๐๐๐๐๐๐ ๐๐๐๐ - ๐๐ข๐๐๐จ๐ญโบ*\n\nโช ${oi}\n\nโช *๐๐ญ๐ข๐ช๐ฎ๐๐ญ๐ ๐ ๐๐ง๐๐ซ๐๐ฅ:*\n`
for (let mem of participants) {
teks += `โฃโฉ @${mem.id.split('@')[0]}\n`}
teks += `โ๐๐ข๐๐๐จ๐ญ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
