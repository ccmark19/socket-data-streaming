const url = "http://192.168.75.204:8001/api/metrics/get_login_info";
var request = require('request');

request.post(
    url,
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);