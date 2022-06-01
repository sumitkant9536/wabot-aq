let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `Succed delete session ttt`, m)
		} else if (conn.game) {
			m.reply(`Session ttt🎮 tidak ada`)
		} else throw '?'
	} catch (e) {
		m.reply('rusak')
	}
}
//BY RIZXYU
handler.help = ['delsesittt']
handler.tags = ['game']
handler.command = /^(delsesittt|dsttt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
