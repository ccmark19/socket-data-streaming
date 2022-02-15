var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '69.64.91.74',
  user     : 'node_server_ppc',
  password : 'Nod3S3rv3rPPC#',
  database : 'globalwealth'
});
 
//Create a node variable or node environment with DB credentials

//Split the connection object.



function query(query_statement){
    this.connection;
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