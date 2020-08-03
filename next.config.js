require('dotenv').config({
  path: '.env',
})

console.log({ REVALIDATE_TIME: process.env.REVALIDATE_TIME })
module.exports = {
  env: {
    API_URL: process.env.API_URL,
    REVALIDATE_TIME: process.env.REVALIDATE_TIME || 60 * 5 * 1,
    TZ: 'America/Sao_Paulo',
  },
}

const withImages = require('next-images')
module.exports = withImages()
