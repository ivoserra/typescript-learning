"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/posts";
// async : receives a promise in return
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});
