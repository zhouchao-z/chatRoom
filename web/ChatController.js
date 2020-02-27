var chatDao = require("../dao/chatDao");
var url = require("url");
var resp = require("../util/response");
var getNowTime = require("../util/getNowTime");

var path = new Map();

function insertChat(request, response) {
    var params = url.parse(request.url, true).query;
    chatDao.insertChat(params.name, params.sendText, getNowTime.getNowTome(), getNowTime.getNowTome(), function (result) {
        response.writeHead(200);
        response.write(resp.writeResp("success", "添加成功", null));
        response.end();
    })
}

path.set("/insertChat", insertChat);


function queryChat(request, response) {
    var params = url.parse(request.url, true).query;
    chatDao.queryChat(parseInt(params.offset), parseInt(params.limit), function (result) {
        response.writeHead(200);
        response.write(resp.writeResp("success", "添加成功", result));
        response.end();
    })
}

path.set("/queryChat", queryChat);

function queryCount(request, response) {
    chatDao.queryCount(function (result) {
        response.writeHead(200);
        response.write(resp.writeResp("success", "添加成功", result));
        response.end();
    })
}

path.set("/queryCount", queryCount);

module.exports.path = path;
