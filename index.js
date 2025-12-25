const { createClient } = require('bedrock-protocol')

const SERVER_IP = process.env.SERVER_IP
const SERVER_PORT = Number(process.env.SERVER_PORT || 19132)
const BOT_NAME = process.env.BOT_NAME || "RailwayBot"

function startBot() {
  console.log("Starting Bedrock bot...")

  const client = createClient({
    host: SERVER_IP,
    port: SERVER_PORT,
    username: BOT_NAME,
    profilesFolder: "./profiles",
    offline: false
  })

  client.on('join', () => {
    console.log("Bot joined the server")
  })

  client.on('disconnect', reason => {
    console.log("Disconnected:", reason)
    setTimeout(startBot, 5000)
  })

  client.on('error', err => {
    console.log("Error:", err)
  })
}

startBot()
