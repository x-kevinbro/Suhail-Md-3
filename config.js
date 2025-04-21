const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_35_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICA0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFpJRExucUYxT21TY1h4em4xMmtwTWQvODg4MmxjVllJNk43Uld4MElQOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTHVLb1I3Tk5UbzJ0eXUtWm5Nbkx6d1wiLFxuICBcInBob25lSWRcIjogXCJjYzE2ZDA3Ny05YzVjLTQ2YTQtYTZkZC1lOTY2OGYwMjA4MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMTE2LFxuICAgICAgMTkwLFxuICAgICAgMjI4LFxuICAgICAgNCxcbiAgICAgIDY3LFxuICAgICAgMTg5LFxuICAgICAgMTQ2LFxuICAgICAgMTA2LFxuICAgICAgMTUxLFxuICAgICAgNjcsXG4gICAgICAxODQsXG4gICAgICAyNDQsXG4gICAgICA1OSxcbiAgICAgIDE5NyxcbiAgICAgIDE1NyxcbiAgICAgIDE3MSxcbiAgICAgIDMxLFxuICAgICAgMjA3LFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAzMCxcbiAgICAgIDEsXG4gICAgICAxMTUsXG4gICAgICA3NyxcbiAgICAgIDE5NCxcbiAgICAgIDksXG4gICAgICAxNTQsXG4gICAgICAxMzgsXG4gICAgICA0LFxuICAgICAgMjU0LFxuICAgICAgMjU0LFxuICAgICAgMzIsXG4gICAgICAyMzksXG4gICAgICAxNzAsXG4gICAgICAyMzEsXG4gICAgICAxMzcsXG4gICAgICAxMjksXG4gICAgICAyOCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTCtGcHZJSEVNUExtY0FHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWUtuTEdNOVpLd0lYNThqRVJTR0tZRDIzODhSLy9xVzhnVHIvWWgxUGowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxSeVNHWTNnWnBJZ0lvdmJ0STB5MjBwNGtZQW8zS3V2OVZ4bWlPM2xyYnU0emRtaDlKb3M5SFI0bUhONGQxRWRIaXAwbG56cUNwN3VhQy9TUDNWNUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1YSk5XRldjUkkvOURoanJpbUR4dzc4UjUxVUJWM2h4VTNMNGkycWtYR2NxZ2JFSEhYdG9ad2RsSEpHdS83Mjh4NnJIcXFlOFRGKy82cXNzbXNNbkJnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTY1MzkyNTI6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmtLfCdl57wnZey8J2Yg/Cdl7bwnZe7XCIsXG4gICAgXCJsaWRcIjogXCI0NjI4MzE4ODM1MTE5Mzo0NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU2NTM5MjUyOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUyNDk3MzVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
