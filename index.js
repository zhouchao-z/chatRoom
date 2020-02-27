var express = require("express");
// var global = require("./config");
var loader = require("./loader");
var app = new express;
app.use(express.static("./page"));
app.listen(12306);

app.get("/insertChat", loader.get("/insertChat"));
app.get("/queryChat", loader.get("/queryChat"));
app.get("/queryCount", loader.get("/queryCount"));
