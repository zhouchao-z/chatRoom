var mysql = require("mysql");
function createconnection () {
    var connection = mysql.createConnection({
        host: "192.168.31.243",
        port: "3306",
        user: "root",
        password: "root",
        database: "chatRoom"
    })
    return connection;
}
module.exports.createconnection = createconnection;
