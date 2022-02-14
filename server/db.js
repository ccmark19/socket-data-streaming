


 
//Create a node variable or node environment with DB credentials

//Split the connection object.



function query(query_statement){
    this.connection;
    let query_string= `${query_statement}`;

    return new Promise((resolve, reject) => {
                connection.query(query_string, function (error, results, fields) {
                // if (!error) console.log('results->',results);
                // if (!error) return results;
                if (error) {
                    console.error("One or more errors occurred!");
                    console.error(error);
                    reject(error);
                    return;
                  }
                    resolve(results);
                    // return results;
                // if (!error) callback(results);
                // else if (error) throw error;
                // console.log('The solution is: ', results[0].solution);
        });
    })
   
}
 

module.exports = query;
