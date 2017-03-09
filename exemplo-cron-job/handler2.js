'use strict'
const request = require('request')
const URI = process.env.URI || "http://google.com";

module.exports.ipt_http = (event, context, callback) => {
  request.get(URI, 
    (err, response, body) => {
      if (! err) {
        callback(null, { message: 'HTTP IPT OK!', body });
      } else {
        callback(true, err);
      }
    }
  );
}