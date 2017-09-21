var router = require("express")();
var A = require('./controllers/a.controller');
var B = require('./controllers/b.controller');
module.exports = function () {

  router.use(A());
  router.use(B());
  router.all('**',(req,res,next)=>{
    res.send('404 NOT PAGE!')
  });

  return router;

};