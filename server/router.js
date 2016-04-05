var libs = require("../libs.js");
module.exports = function (app) {

  app.get(['/a',''],function (req, res) {
    var js = libs.getJs('a');
    var css = libs.getCss("a");
    res.render('a/index',{
      cssHref:css,
      jsSrc : js,
    });
  });

  app.get('b',function (req, res) {
    var js = libs.getJs('b');
    var css = libs.getCss("b");
    res.render('a/index',{
      cssHref:css,
      jsSrc : js,
    });
  });

};