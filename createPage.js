var path = require('path');
var fs = require('fs');

var pageName = ''; //需要创建的页面

process.argv.forEach((val, index, array) => {
  if(/^page=/.test(val)) {
      pageName = val.split('=')[1];
  }
});
if(pageName=='') {
    console.error('创建页面失败：','请设定页面名称 page=""');
    process.exit(1);
}

var pathObject = {
    api:path.resolve('server/api/',pageName+'.api.js'),
    scss:path.resolve('scss/',pageName),
    script:path.resolve('script/',pageName),
    view:path.resolve('views/',pageName)
};

console.info(pathObject.script);

fs.exists(pathObject.scss,function (exists) {
    if(!exists) {
        fs.mkdir(pathObject.scss,function (error) {
            if(error) {
                return console.error(error);
            };
            fs.writeFile(pathObject.scss+'/'+pageName+'.scss','@import "../common/common.scss";','utf8');
        });
    } else {
            fs.writeFile(pathObject.scss+'/'+pageName+'.scss','@import "../common/common.scss";','utf8');
    }
});

fs.exists(pathObject.script,function (exists) {
    if(!exists) {
        fs.mkdir(pathObject.script,function (error) {
            if(error) {
                return console.error(error);
            };
            fs.writeFile(pathObject.script+'/main.js','var Common = require("../common/common");','utf8');
        });
    } else {
            fs.writeFile(pathObject.script+'/main.js','var Common = require("../common/common");','utf8');
    }
});

fs.exists(pathObject.api,function (exists) {
    if(!exists) {
        fs.writeFile(pathObject.api,'var rest = require("restler");var ENV = require("../../config/env/"+process.env.NODE_ENV+".js");var baseUrl = ENV.baseUrl;','utf8');
    }
});

fs.exists(pathObject.view,function (exists) {
    if(!exists) {
        fs.mkdir(pathObject.view,function (error) {
            if(error) {
                return console.error(error);
            };
            fs.writeFile(pathObject.view+'/'+pageName+'.hbs','','utf8');
        });
    } else {
            fs.writeFile(pathObject.view+'/'+pageName+'.hbs','','utf8');
    }
})
