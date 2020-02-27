//加载所有的controller文件
var fs = require("fs");
var globalConfig = require("./config");

var pathMap = new Map();
var fileArr = fs.readdirSync(globalConfig["web_path"]);
for(var i = 0; i < fileArr.length; i++) {
    var temp = require("./" + globalConfig["web_path"] + "/" + fileArr[i]);
    if(temp.path) {
        for(var [key, value] of temp.path) {
            if(pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error("这个接口已经有了对应的方法");
            }
        }
    }
}

module.exports = pathMap;