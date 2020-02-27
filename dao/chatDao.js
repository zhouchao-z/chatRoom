var dbutil = require("./dbutil");
function insertChat(name, content, ctime, utime, success) {
    var insertSql = "insert into chat(`name`,`content`, `ctime`, `utime`) values (?,?,?,?);"
    var params = [name, content, ctime, utime];
    var connection = dbutil.createconnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryChat(offset, limit, success) {
    var querySql = "select *from chat limit ?, ?";
    var params = [offset, limit];
    var connection = dbutil.createconnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryCount(success) {
    var querySql = "select count (*) as sum from chat";
    var params = [];
    var connection = dbutil.createconnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if(error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}
module.exports.insertChat = insertChat;
module.exports.queryChat = queryChat;
module.exports.queryCount = queryCount;