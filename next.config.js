require('dotenv').config({
  path: '.env',
})

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    REVALIDATE_TIME: process.env.REVALIDATE_TIME || 60 * 60 * 1,
  },
}
