var moment = require("moment");

var time = function(err, data){
  if (err) throw err;
  return moment(data).format();
}

module.exports;