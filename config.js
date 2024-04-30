const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://cpjoker:cpjoker553@cluster0.z9jjdxt.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://www.instagram.com/mhdasri553?igsh=b245bXV5a212cms3' // add your username
global.sudo = process.env.SUDO || '17186186806' 
global.devs = '17186186806';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/9dc03b0a57ee669305f6d.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib044Zk9mRE1YZDh6RzlBcXl4ZVo0ZUpNNW5RUU5SQjdhdVB0eGh2UzZHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0gzRHVxODFTMUJqM2loVjNSSkZJbDR3cE5MeWtuZ1E2Q0trUjhzRjZXbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSStKa242V0dRZXpFQjFXTEgzR0pjcThnbUhDWmR3Wmw1d2VUZlk2L25zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmVlBoNFBaTDB1ZXRtaEl4aUZ4aFpnTnVwWmw4SExtaDNPcTYrbTZlOUQ0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIQWM0dmY1TzI2U05DN1d0NGI2R3NrWTlXbUp5VlNBSUFVZzdsTnpjVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ2Z3ZaSHZYODVsYktqRWwwQnltQ2p0MktodkJXS085UmEwM1l1NVdFRGM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0SGZXWGdvY3I4clZ2SmRkaUVnUnZHZWh6WUlaeWJMSm1iTXZ2cm04a0pseW56UkkvOFh1eTVsbWxCU3JlMWlwaU9lRnV1OGlTdlZ2WHorVU9JdU9EQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4MywiYWR2U2VjcmV0S2V5IjoiUlFvVndnckR4RXphUWgydStOSXJaRDVVNVEzT0ViWmhGUEFKMHU1OUNvQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiREFiSzd0YU5RcUtVZmJlMl9sZEY1ZyIsInBob25lSWQiOiJhOTBjZTRjYy02M2FiLTQ1Y2UtOWI1Yi04MDJhZGEzYmE5MjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDY4eU9xZGk3SnZkOENVeGVlZ3VqQ3Z3L2VvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQVhOeDZucEtvWWI5SHI3b1NhUGV2U3lMeVU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU0wxYWNFRUx2bnc3RUdHQndnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhZjQvWXJrU1J0bDlOT0pNN20wM3RtbWtjNlp5ZlBjQ0UvTEVUVGdCMURBPSIsImFjY291bnRTaWduYXR1cmUiOiJob1kzVDV2dUpjYStTbUwwbHlEQUc0M2R2V0ErQnZCL1JTVEpDTFNRcTYvK0pZRDdROTIybWgzYlp4SGpVay8zVlhQNmZOYit3Z1d2dDBkaVFGYmpBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVlJEaHlvZEFkM0pOZmdGRUVxRnpnbWd1dVhGc1d5YWVXb21Dd3dPZ05oMHFGUlJNNVFQME1mVEtSNmNteWw5YWtlMGxha3YrdFdHTHd2Q1YxRG8vQ1E9PSJ9LCJtZSI6eyJpZCI6IjE3MTg2MTg2ODA2OjI0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE3MTg2MTg2ODA2OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlduK1AySzVFa2JaZlRUaVRPNXRON1pwcEhPbWNuejNBaFB5eEUwNEFkUXcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQ0ODQxNjB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ˢᴸᴹ(•ิ‿•ิ)',
  packname:  process.env.PACK_NAME || 'ˢᴸᴹ(•ิ‿•ิ)',
   
  botname:   process.env.BOT_NAME === undefined ? "Dynamic-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Mhd-Asri' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed,Fuck,porn,sex,xxx,fucker,asshole,fuck you,fuck off' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? 'HRKU-12faf282-a9d1-426c-a24b-b166565b0150' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'con1' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
