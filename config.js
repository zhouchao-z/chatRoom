var fs = require("fs");
var file = fs.readFileSync("./server.conf");
var globalConf = {};
var fileArr = file.toString().split("\r\n");
for(var i = 0; i < fileArr.length; i++) {
    var temp = fileArr[i].split("=");
    globalConf[temp[0]] = temp[1];
}
module.exports = globalConf;
