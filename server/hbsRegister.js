module.exports = function (hbs) {

  hbs.registerPartials(__dirname + '/views/partials');


  hbs.registerHelper('cssLink', function (data) {
    var result = [];
    data.map(function (v, i) {
      var s = v.replace(/\\/g,'/');
      var l = "<link rel='stylesheet' href='"+s+"'>";
      result.push(l);
    });
    return new hbs.SafeString(result.join(''));
  });

  hbs.registerHelper('jsSrc', function (data) {
    var result = [];
    data.map(function (v, i) {
      var s = v.replace(/\\/g,'/');
      var l = "<script src='"+s+"'></script>";
      result.push(l);
    });
    return new hbs.SafeString(result.join(''));
  })
}