var express = require("express");
var global = require("./config");
var loader = require("./loader");
var app = new express;
app.use(express.static(global["page_path"]));
app.listen(global["port"]);

app.get("/insertChat", loader.get("/insertChat"));
app.get("/queryChat", loader.get("/queryChat"));
app.get("/queryCount", loader.get("/queryCount"));
