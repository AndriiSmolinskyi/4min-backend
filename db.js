const Pool = require('pg').Pool
const POSTGRES_URL='postgres://default:m0BLGHwXCj2S@ep-silent-bonus-a2xob3jn-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require'

const pool = new Pool({
    connectionString: POSTGRES_URL ,
})

module.exports = pool
