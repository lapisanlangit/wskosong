var pool = require('./dbpoolpg');
var db=pool;

module.exports = {
    pgexec: async (sql)=>{
        return new Promise((resolve, reject) => {
            
                  var query = db.query(sql,function (err, result) {

                      if (err) {
                          console.error(err);
                          reject(err);
                      }
                        console.log('\x1b[36m%s\x1b[0m',"SQL QUERY => "+sql);
                       resolve(result);
                  });
            
          })
    }
}




