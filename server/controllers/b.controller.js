var libs = require("../libs.js");
const router = require('express').Router();

module.exports = function () {
  router.get('/b',function (req, res) {
    var js = libs.getJs('b');
    var css = libs.getCss("b");
    res.render('b/index',{
      cssHref:css,
      jsSrc : js,
    });
  });
    return router;    
}