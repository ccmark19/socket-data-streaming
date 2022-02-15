const mysql      = require('mysql');
const env = require('dotenv').config();
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER_ID,
  password : process.env.USER_PASSWORD,
  database : process.env.DATABASE
});

function query(query_statement){
    connection;
    let query_string= `${query_statement}`;

    return new Promise((resolve, reject) => {
            connection.query(query_string, function (error, results, fields) {
                if (error) {
                    console.error("One or more errors occurred!");
                    console.error(error);
                    reject(error);
                    return;
                  } else {
                    resolve(results);
                }
            });
        })   
}
 

module.exports = query;
