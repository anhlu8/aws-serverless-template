'use strict';
const AWS = require('aws-sdk');

module.exports.hello = async (event, context) => {
  // event is any data that you pass into the function 
  // in order to invoke this function locally and pass in the event: `sls invoke -l -f hello -d "data params"
  // in order to invoke this function locally and pass in the event: `sls invoke -l -f hello -d "{"first": 2, "second":10}"

  const {first, second} = event;
  const sum = first + second;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: sum,
    }),
  };
};

module.exports.cron = async (event, context, callback) => {
  const now = new Date();
  const message = `The time is ${now}`;
  console.log(message);
  callback(null, message);
};
