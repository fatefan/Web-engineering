var libs = require("../libs.js");
const router = require('express').Router();

module.exports = function () {
  router.get(['/a',''],function (req, res) {
    var js = libs.getJs('a');
    var css = libs.getCss("a");
    res.render('a/index',{
      cssHref:css,
      jsSrc : js,
    });
  });
    return router;    
}