const Pool = require('pg').Pool;

 const pool = new Pool({
     connectionString: "postgres://bephbdbz:25hcAV96-gcDhEhcrrcZAZGv_gPvSYpa@motty.db.elephantsql.com/bephbdbz"

 });


module.exports = pool;