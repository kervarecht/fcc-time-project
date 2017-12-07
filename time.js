var moment = require('moment');

var time = function(date){
  var unixTime = moment(req.query.data).unix();
  var naturalTime = moment(req.query.data).format('MMMM Do YYYY, h:mm:ss');
  
  var response = {
    "unix": unixTime,
    "natural": naturalTime
  }
  
  console.log(response);
  
 if (response.unix.isNaN || response.natural.includes('Invalid')){
   response.unix = null;
   response.natural = null;
   res.send(JSON.stringify(response));
 }
  else {
    res.send(JSON.stringify(response));
  }
}