const fs = require("fs") //fs -> file system
fs.readFile("async.txt", "utf-8", function(err, data) {
    console.log(data)
})