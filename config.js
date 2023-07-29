const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["628989513496@s.whatsapp.net"]
global.nomerOwner = "628989513496"
global.nomorOwner = ['628989513496']
global.namaDeveloper = "ZiroBotz-MD"
global.namaBot = "ZiroBotz WhatsApp"

//DATA BASE STORE
global.namaStore = "FOXstore"
global.noDana = "081283353320"
global.noGopay = "081283353320"
global.noOvo = "Gada"
// BATAS BASE STORE

//DATA BASE PUSH
global.packname = ""
global.author = "Sticker By ZiroBOTz"
global.tekspushkon = ""
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""
//BATAS DATA BASE PUSH

// GLOBAL MESS
global.mess = {
   owner: "lu siapa ?\n*GAUSAH SOK ASIK*",
   proses: "wet proses tod",
   sukses: "*⌜ DONE ⌟*\n udah ya mek",
   group: "Khusus Di Dalam Group",
   priv: "khusus di chat private",
}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By KirBotz
Di Tulis Dan Di Fix Oleh ZIRO
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/