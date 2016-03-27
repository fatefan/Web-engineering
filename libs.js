var fs = require('fs');
var path = require('path');
if(process.env.NODE_ENV == 'development') {
    var entryPath = "./public/";
} else {
    var entryPath = "./client/";    
}
module.exports = {
    getJs : function (item) {
        var p = entryPath+"js/"+item;
        var entry = "js/"+item;
        var entris = fs.readdirSync(p).reduce(function (o,filename) {
            (o.push(path.join(entry,filename)));
            return o;
        },[]);
        var common = fs.readdirSync(entryPath+"js/common").reduce(function (o,filename) {
            (o.push(path.join("js/common",filename)));
            return o;
        },[]);
        return (common.concat(entris));
    },
    
    getCss : function (item) {
        var p = entryPath+"css/"+item;
        var entry = "css/"+item;
        var entris = fs.readdirSync(p).reduce(function (o,filename) {
            (o.push(path.join(entry,filename)));
            return o;
        },[]);
        return entris;
    }
    
}