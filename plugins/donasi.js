let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Smartfren:* [088210072756]
┣➥ *Dana:* [0888210072756]
┣➥ *Saweria:* [Gaad:>]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/628818770766*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
