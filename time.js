var moment = require('moment');

var time = function(date){
  var unixTime = moment(date).unix();
  var naturalTime = moment(date).format('MMMM Do YYYY, h:mm:ss');
  
  var response = {
    "unix": unixTime,
    "natural": naturalTime
  }
  
 if (response.unix.isNaN || response.natural.includes('Invalid')){
   response.unix = null;
   response.natural = null;
   return response
 }
  else {
    return response
  }
}

module.exports.time = time;