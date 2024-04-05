const Pool = require('pg').Pool

const pool = new Pool({
    user ="default",
    host ="ep-silent-bonus-a2xob3jn-pooler.eu-central-1.aws.neon.tech",
    password="m0BLGHwXCj2S",
    database="verceldb",
})

module.exports = pool
