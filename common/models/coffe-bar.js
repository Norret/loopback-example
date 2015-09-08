var request = require("request");

module.exports = function(CoffeBar) {
  CoffeBar.status = function(cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    console.log('Current hour is ' + currentHour);
    var response;
    if (currentHour > OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
    cb(null, response);
  };

  CoffeBar.testEmail = function(address, cb) {

    var req = {
      url: "https://pozzad-email-validator.p.mashape.com/emailvalidator/validateEmail/" + address,
      headers: {
        "X-Mashape-Key": "siGDsENxxhmsh095bEEeJVr2MFbzp1z8ZP4jsnRMrwowVogXR0"
      }
    };

    request(req, function(error, response, body){
      if(!error && response.statusCode === 200) {
        cb(null, body);
      } else {
        cb(null, error);
      }
    });
  };

  CoffeBar.remoteMethod(
    'testEmail',
    {
     http: {path: '/testEmail', verb: 'get'},
      accepts: {arg: 'email', type: 'string'},
     returns: {arg: 'teststring', type: 'string'}

    }
   );
  CoffeBar.remoteMethod(
    'status',
    {
      http: {
          path: '/status',
          verb: 'get'
      },
      returns: {arg: 'status', type: 'string'},
      description: 'Returns the status of the CoffeBar',

    }
  );
};
