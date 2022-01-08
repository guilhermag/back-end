const Pool = require('pg').Pool;
//require('dotenv').config()

 const pool = new Pool({
     //connectionString: process.env.POSTGRES_URL
     connectionString: "postgres://bephbdbz:25hcAV96-gcDhEhcrrcZAZGv_gPvSYpa@motty.db.elephantsql.com/bephbdbz"

 });


module.exports = pool;